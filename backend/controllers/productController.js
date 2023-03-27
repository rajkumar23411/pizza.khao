const Product = require("../models/product");
const CustomErrorHandler = require("../middlewares/CustomErrorHandler");
const Features = require("../utils/Features");
const cloudinary = require("cloudinary").v2;
const productController = {
  async create(req, res, next) {
    try {
      const {
        name,
        regularPrice,
        mediumPrice,
        largePrice,
        extraLargePrice,
        category,
        description,
        image,
      } = req.body;
      const product = await Product.find();
      const isProductExists = await product.find((prod) => prod.name === name);

      if (isProductExists) {
        return next(
          CustomErrorHandler.AlreadyExists(
            "A product with this name already exists"
          )
        );
      }

      const createdProduct = await Product.create({
        name,
        prices: {
          regular: regularPrice,
          medium: mediumPrice,
          large: largePrice,
          extralarge: extraLargePrice,
        },
        description,
        category,
        image,
        user: req.user._id,
      });

      res.status(200).json({ createdProduct });
    } catch (Err) {
      console.log("The Error is: " + Err);
    }
  },
  async update(req, res, next) {
    try {
      let product = await Product.findById(req.params.id);

      if (!product) {
        return next(CustomErrorHandler.notFound("Product not found"));
      }

      product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });

      res.status(201).json({ message: "Product updated", product });
    } catch (error) {
      console.log(error);
    }
  },

  async getAllproducts(req, res, next) {
    try {
      const resultPerPage = 8;
      const totalProducts = await Product.countDocuments();
      const features = new Features(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);

      const products = await features.query;

      res.status(200).json({ products, totalProducts });
    } catch (error) {
      console.log(error);
    }
  },

  async getProductsByCategory(req, res, next) {
    try {
      const category = req.params.category;

      const product = await Product.find({
        category: { $all: category },
      });

      res.status(302).json({ product });
    } catch (err) {
      console.log(err);
    }
  },

  async getSingleProduct(req, res, next) {
    try {
      const product = await Product.findById(req.params.id);

      if (!product) {
        return next(CustomErrorHandler.notFound("Product does not exists"));
      }

      res.status(200).json({ product });
    } catch (error) {
      console.log(error);
    }
  },

  async deleteAproduct(req, res, next) {
    try {
      let product = await Product.findById(req.params.id);

      if (!product) {
        return next(CustomErrorHandler.notFound("Product does not exists"));
      }

      await Product.findByIdAndRemove(req.params.id);

      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      console.log(error);
    }
  },

  async addUpdateReview(req, res, next) {
    try {
      const { id, comment, rating } = req.body;

      console.log(req.body);
      
      const name = `${req.user.firstname} ${req.user.lastname}`;
      const review = {
        user: req.user._id,
        name,
        rating: Number(rating),
        comment,
      };

      const product = await Product.findById(id);

      if (!product) {
        return next(CustomErrorHandler.notFound("Product does not exists"));
      }

      const isReviewed = await product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
      );

      if (isReviewed) {
        product.reviews.forEach((rev) => {
          if (rev.user.toString() === req.user._id.toString()) {
            rev.rating = rating;
            rev.comment = comment;
          }
        });
      } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
      }

      let avg = 0;

      product.ratings = product.reviews.forEach((rev) => {
        avg += rev.rating;
      });

      product.ratings = avg / product.reviews.length;

      await product.save({ runValidators: false });

      res.status(200).json({ message: "Review added successfully" });
    } catch (error) {
      console.log(error);
  }
  },
  async getAllReviews(req, res, next) {
    try {

      const product = await Product.findById(req.query.id);
      
      if (!product) {
        return next(CustomErrorHandler.notFound("Product not found"));
      }

      res.status(200).json({reviews: product.reviews});
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = productController;

const {
  add,
  getAddress,
  update,
  remove,
} = require("../controllers/addressController");
const { auth } = require("../middlewares/auth");

const addressRoutes = require("express").Router();

addressRoutes.post("/address/add", [auth], add);
addressRoutes.get("/address", [auth], getAddress);
addressRoutes.put("/address/:id", [auth], update);
addressRoutes.delete("/address/:id", [auth], remove);

module.exports = addressRoutes;

import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CommentBox from "./CommentBox";

const PizzaInformation = () => {
  const [toggleState, setToggleState] = useState(1);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const toggleTag = (index) => {
    setToggleState(index);
  };
  const handleCommentBox = (pizza) => {
    setIsModelOpen(true);
  };
  return (
    <section className="py-20 relative">
      <div className="w-4/5">
        <div className="w-full border-b-2 border-dashed border-golden flex gap-20">
          <p
            onClick={() => toggleTag(1)}
            className={`${
              toggleState === 1 ? "tab-active" : ""
            } uppercase font-roboto tracking-wide text-golden text-base font-medium hover:text-red-800 cursor-pointer`}
          >
            Description
          </p>
          <p
            onClick={() => toggleTag(2)}
            className={`${
              toggleState === 2 ? "tab-active" : ""
            } uppercase font-roboto tracking-wide text-golden text-base font-medium hover:text-red-800 cursor-pointer`}
          >
            Additional Information
          </p>
          <p
            onClick={() => toggleTag(3)}
            className={`${
              toggleState === 3 ? "tab-active" : ""
            } uppercase font-roboto tracking-wide text-golden text-base font-medium hover:text-red-800 cursor-pointer`}
          >
            Reviews (1)
          </p>
        </div>
        <div className="w-full pt-6 content-tabs flex">
          <div
            className={`${
              toggleState === 1 ? "content active-content" : "content"
            } text-gray-600`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
            maiores sit. Non aliquam sapiente debitis molestiae ea quae ducimus,
            dolores nostrum beatae. Suscipit libero autem laborum, illum alias
            perspiciatis magni! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolores, minus minima quam, deleniti id maxime
            amet dolorum at nobis, delectus placeat veritatis aut dignissimos
            adipisci maiores. Quia sed aspernatur saepe.
          </div>
          <div
            className={`${
              toggleState === 2 ? "content active-content" : "content"
            }`}
          >
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <span className="uppercase text-golden font-bold tracking-wide">
                  Weight
                </span>
                <span className="uppercase text-golden font-bold tracking-wide">
                  Dimensions
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-500">2.5 kg</span>
                <span className="text-gray-500">45 x 45 x 1.5 cm</span>
              </div>
            </div>
          </div>
          <div
            className={`${
              toggleState === 3 ? "content active-content" : "content"
            } `}
          >
            <h1 className="uppercase text-golden font-roboto pb-6 font-semibold tracking-wide">
              1 review for mediterranea
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4 justify-start items-start">
                <div className="bg-green-400 h-16 w-16 rounded-full overflow-hidden">
                  <img
                    src="https://secure.gravatar.com/avatar/a378400ca7b28bd69b381af664cc41c1?s=60&d=mm&r=g"
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <div>
                    <StarIcon fontSize="small" sx={{ color: "darkred" }} />
                    <StarIcon fontSize="small" sx={{ color: "darkred" }} />
                    <StarIcon fontSize="small" sx={{ color: "darkred" }} />
                    <StarIcon fontSize="small" sx={{ color: "darkred" }} />
                  </div>
                  <div className="flex gap-1 items-center">
                    <span className="uppercase font-bold text-golden text-sm tracking-wide">
                      Rajkumar
                    </span>
                    <span className="text-gray-500 capitalize">
                      - July 28, 2023
                    </span>
                  </div>
                  <div className="text-gray-500 pt-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatem ea molestias dolore reprehenderit inventore illum
                    at vero magnam quis nisi.
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-start items-start">
                <div className="bg-green-400 h-16 w-16 rounded-full overflow-hidden">
                  <img
                    src="https://secure.gravatar.com/avatar/a378400ca7b28bd69b381af664cc41c1?s=60&d=mm&r=g"
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <div>
                    <StarIcon fontSize="small" sx={{ color: "darkred" }} />
                    <StarIcon fontSize="small" sx={{ color: "darkred" }} />
                    <StarIcon fontSize="small" sx={{ color: "darkred" }} />
                    <StarIcon fontSize="small" sx={{ color: "darkred" }} />
                  </div>
                  <div className="flex gap-1 items-center">
                    <span className="uppercase font-bold text-golden text-sm tracking-wide">
                      Rajkumar
                    </span>
                    <span className="text-gray-500 capitalize">
                      - July 28, 2023
                    </span>
                  </div>
                  <div className="text-gray-500 pt-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatem ea molestias dolore reprehenderit inventore illum
                    at vero magnam quis nisi.
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-start items-start">
                <div className="bg-green-400 h-16 w-16 rounded-full overflow-hidden">
                  <img
                    src="https://secure.gravatar.com/avatar/a378400ca7b28bd69b381af664cc41c1?s=60&d=mm&r=g"
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <div>
                    <StarIcon fontSize="small" sx={{ color: "darkred" }} />
                    <StarIcon fontSize="small" sx={{ color: "darkred" }} />
                    <StarIcon fontSize="small" sx={{ color: "darkred" }} />
                    <StarIcon fontSize="small" sx={{ color: "darkred" }} />
                  </div>
                  <div className="flex gap-1 items-center">
                    <span className="uppercase font-bold text-golden text-sm tracking-wide">
                      Rajkumar
                    </span>
                    <span className="text-gray-500 capitalize">
                      - July 28, 2023
                    </span>
                  </div>
                  <div className="text-gray-500 pt-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatem ea molestias dolore reprehenderit inventore illum
                    at vero magnam quis nisi.
                  </div>
                </div>
              </div>
              <div
                onClick={handleCommentBox}
                className="bg-red-600 w-max uppercase text-white tracking-wide  font-roboto px-4 py-2 mt-6 hover:bg-red-700 cursor-pointer"
              >
                Post a review
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModelOpen && <CommentBox onClose={() => setIsModelOpen(false)} />}
    </section>
  );
};

export default PizzaInformation;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";
import {
  addReview,
  newProductReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  products: productReducer,
  user: userReducer,
  newProduct: newProductReducer,
  productDetails: productDetailsReducer,
  allReviews: productReviewsReducer,
  addReview: addReview,
});

let initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

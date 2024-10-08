import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
    carts: cartReducer,
  },
});

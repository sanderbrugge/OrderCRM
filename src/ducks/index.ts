import { combineReducers } from "redux";
import orderReducer, { AsyncOrders } from "./order.reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer, { AsyncProducts } from "./product.reducer";

export interface Store {
  orders: AsyncOrders;
  products: AsyncProducts;
}

const rootReducer = combineReducers({
  orders: orderReducer,
  products: productReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

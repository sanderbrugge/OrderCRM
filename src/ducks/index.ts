import { combineReducers } from "redux";
import orderReducer, { AsyncOrders } from "./order.reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export interface Store {
  orders: AsyncOrders;
}

const rootReducer = combineReducers({
  orders: orderReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

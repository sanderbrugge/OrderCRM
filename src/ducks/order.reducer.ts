import { fetchOrders } from "../api/Order/order.services";
import { createAsyncAction } from "../util/async-redux";
import { Order } from "../api/Order/order";
import { Reducer } from "redux";
import {
  Action,
  UNSENT,
  PENDING,
  SUCCESS,
  FAILURE,
  AsyncResource
} from "./redux.types";
import { Product } from "../api/Product/product";

export interface AsyncOrders extends AsyncResource {
  data: Order[];
}

const initialState: AsyncOrders = {
  data: [],
  status: UNSENT,
  error: undefined
};

export const types = {
  FETCH_ORDER_REQUEST: "ORDER/FETCH_ORDER_REQUEST",
  FETCH_ORDER_SUCCESS: "ORDER/FETCH_ORDER_SUCCESS",
  FETCH_ORDER_FAILURE: "ORDER/FETCH_ORDER_FAILURE",

  ADD_PRODUCT_TO_ORDER: "ORDER/ADD_PRODUCT_TO_ORDER"
};

const orderReducer: Reducer<AsyncOrders, any> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case types.FETCH_ORDER_REQUEST: {
      return {
        data: [],
        status: PENDING,
        error: undefined
      };
    }
    case types.FETCH_ORDER_SUCCESS: {
      return {
        data: action.payload,
        status: SUCCESS,
        error: undefined
      };
    }
    case types.FETCH_ORDER_FAILURE: {
      return {
        data: [],
        status: FAILURE,
        error: action.payload
      };
    }
    case types.ADD_PRODUCT_TO_ORDER: {
      console.log("dispatching add product");

      const newState = {
        ...state,
        data: state.data.map(order => {
          console.log(action.payload.orderId);
          if (order.id === action.payload.orderId) {
            return {
              ...order,
              items: [...order.items, action.payload.product]
            };
          }

          return order;
        })
      };

      console.log(newState);

      return newState;
    }
    default:
      return state;
  }
};

export const actions = {
  fetchOrders: () =>
    createAsyncAction({
      asyncRequest: () => fetchOrders(),
      requestType: types.FETCH_ORDER_REQUEST,
      successType: types.FETCH_ORDER_SUCCESS,
      failureType: types.FETCH_ORDER_FAILURE
    }),
  addProduct: (orderId: string, product: Product) => ({
    type: types.ADD_PRODUCT_TO_ORDER,
    payload: { orderId, product }
  })
};

export default orderReducer;

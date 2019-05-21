import { fetchOrders } from "../api/Order/order.services";
import { createAsyncAction } from "../util/async-redux";
import { Order } from "../api/Order/order";
import { Reducer } from "redux";

export interface Action {
  type: string;
  payload: any;
}

export const UNSENT = "UNSENT";
export const PENDING = "PENDING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export interface AsyncOrders {
  data: Order[];
  status: "UNSENT" | "PENDING" | "SUCCESS" | "FAILURE";
  error?: {
    status: number;
    message: string;
  };
}

const initialState: AsyncOrders = {
  data: [],
  status: UNSENT,
  error: undefined
};

export const types = {
  FETCH_ORDER_REQUEST: "ORDER/FETCH_ORDER_REQUEST",
  FETCH_ORDER_SUCCESS: "ORDER/FETCH_ORDER_SUCCESS",
  FETCH_ORDER_FAILURE: "ORDER/FETCH_ORDER_FAILURE"
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
    })
};

export default orderReducer;

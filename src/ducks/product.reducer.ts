import { createAsyncAction } from "../util/async-redux";
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
import { fetchProducts } from "../api/Product/product.services";

export interface AsyncProducts extends AsyncResource {
  data: Product[];
}

const initialState: AsyncProducts = {
  data: [],
  status: UNSENT,
  error: undefined
};

export const types = {
  FETCH_ORDER_REQUEST: "ORDER/FETCH_ORDER_REQUEST",
  FETCH_ORDER_SUCCESS: "ORDER/FETCH_ORDER_SUCCESS",
  FETCH_ORDER_FAILURE: "ORDER/FETCH_ORDER_FAILURE"
};

const orderReducer: Reducer<AsyncProducts, any> = (
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
      asyncRequest: () => fetchProducts(),
      requestType: types.FETCH_ORDER_REQUEST,
      successType: types.FETCH_ORDER_SUCCESS,
      failureType: types.FETCH_ORDER_FAILURE
    })
};

export default orderReducer;

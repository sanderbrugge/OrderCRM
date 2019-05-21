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
  FETCH_PRODUCT_REQUEST: "PRODUCT/FETCH_PRODUCT_REQUEST",
  FETCH_PRODUCT_SUCCESS: "PRODUCT/FETCH_PRODUCT_SUCCESS",
  FETCH_PRODUCT_FAILURE: "PRODUCT/FETCH_PRODUCT_FAILURE"
};

const productReducer: Reducer<AsyncProducts, any> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_REQUEST: {
      return {
        data: [],
        status: PENDING,
        error: undefined
      };
    }
    case types.FETCH_PRODUCT_SUCCESS: {
      return {
        data: action.payload,
        status: SUCCESS,
        error: undefined
      };
    }
    case types.FETCH_PRODUCT_FAILURE: {
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
  fetchProducts: () =>
    createAsyncAction({
      asyncRequest: () => fetchProducts(),
      requestType: types.FETCH_PRODUCT_REQUEST,
      successType: types.FETCH_PRODUCT_SUCCESS,
      failureType: types.FETCH_PRODUCT_FAILURE
    })
};

export default productReducer;

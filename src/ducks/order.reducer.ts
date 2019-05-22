import { fetchOrders } from "../api/Order/order.services";
import { createAsyncAction } from "../util/async-redux";
import { Order, Item } from "../api/Order/order";
import { Reducer } from "redux";
import {
  Action,
  UNSENT,
  PENDING,
  SUCCESS,
  FAILURE,
  AsyncResource
} from "./redux.types";

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

/**
 * In a larger application I'd use Immer to handle the immutability and state changess
 * In a small app like this, it was fine without but it does produce "uglier" reducers like "ADD_PRODUCT_TO_ORDER"
 *
 * @param state the current redux state
 * @param action the action to perform
 */
const orderReducer: Reducer<AsyncOrders, any> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case types.FETCH_ORDER_REQUEST: {
      return {
        ...state,
        status: PENDING
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
      return {
        ...state,
        data: state.data.map(order => {
          if (order.id === action.payload.orderId) {
            const isItemInOrder = order.items.some(
              item => item["product-id"] === action.payload.item["product-id"]
            );

            if (!isItemInOrder) {
              return {
                ...order,
                total: (
                  parseFloat(order.total) +
                  parseFloat(action.payload.item.total)
                ).toFixed(2),
                items: [...order.items, action.payload.item]
              };
            }

            const items = order.items.map(item => {
              if (item["product-id"] === action.payload.item["product-id"]) {
                return {
                  "product-id": action.payload.item["product-id"],
                  quantity: (
                    parseInt(item.quantity) +
                    parseInt(action.payload.item.quantity)
                  ).toString(10),
                  "unit-price": action.payload.item["unit-price"],
                  total: (
                    parseFloat(item.total) +
                    parseFloat(action.payload.item.total)
                  ).toFixed(2)
                };
              }

              return item;
            });

            return {
              ...order,
              total: (
                parseFloat(order.total) + parseFloat(action.payload.item.total)
              ).toFixed(2),
              items
            };
          }

          return order;
        })
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
    }),
  addProduct: (orderId: string, item: Item) => ({
    type: types.ADD_PRODUCT_TO_ORDER,
    payload: { orderId, item }
  })
};

export default orderReducer;

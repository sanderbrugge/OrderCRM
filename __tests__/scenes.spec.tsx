import "react-native";
import * as React from "react";
import { OrderDetailContainer } from "../src/scenes/OrderDetail/OrderDetailContainer";
import { Home } from "../src/scenes/Home/Home";
import { AddProduct } from "../src/scenes/AddProduct/AddProduct";
import renderer from "react-test-renderer";
import { SUCCESS } from "../src/ducks/redux.types";

const orders = {
  status: SUCCESS,
  data: [
    {
      id: "2",
      "customer-id": "2",
      items: [
        {
          "product-id": "B102",
          quantity: "5",
          "unit-price": "4.99",
          total: "24.95"
        }
      ],
      total: "24.95"
    }
  ]
};

test("AddProduct renders correctly", async () => {
  const asyncProducts = {
    status: "UNSENT",
    data: []
  };

  const orderId = "1";
  const addProduct = jest.fn();
  const fetchProducts = jest.fn();

  const mockProps = {
    products: asyncProducts,
    orderId,
    addProduct,
    fetchProducts
  };

  // @ts-ignore
  const tree = await renderer.create(<AddProduct {...mockProps} />).toJSON();

  expect(tree).toMatchSnapshot();
});

jest.mock(
  "../src/components/OrderRow/OrderRowContainer",
  () => "orderRowContainer"
);

test("Home Component with orders renders correctly", async () => {
  const mockProps = {
    orders,
    fetchOrders: jest.fn()
  };

  // @ts-ignore
  const tree = await renderer.create(<Home {...mockProps} />).toJSON();

  expect(tree).toMatchSnapshot();
  expect(mockProps.fetchOrders).toBeCalledTimes(0);
});

// Mock this child component because it relies on react-navigation but can't find it.
jest.mock("../src/components/Header/Header", () => "header");

test("OrderDetail Component renders correctly", async () => {
  jest.mock("react-navigation", () => ({
    withNavigation: (component: React.FC) => component
  }));

  const mockProps = {
    navigation: { navigation: jest.fn(), getParam: jest.fn(), pop: jest.fn() },
    orders
  };

  const tree = await renderer
    // @ts-ignore
    .create(<OrderDetailContainer {...mockProps} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

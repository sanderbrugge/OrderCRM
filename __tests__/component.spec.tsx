import "react-native";
import * as React from "react";
import ProductItem from "../src/components/Product";
import Error from "../src/components/Error";
import ItemContainer from "../src/components/Item";
import OrderButton from "../src/components/OrderButton";
import OrderRow from "../src/components/OrderRow";
import renderer from "react-test-renderer";

test("Error Component renders correctly", () => {
  const tree = renderer.create(<Error message="Test error" />).toJSON();

  expect(tree).toMatchSnapshot();
});

test("ItemContainer renders correctly", () => {
  const item = {
    "product-id": "B102",
    quantity: "10",
    "unit-price": "4.99",
    total: "49.90"
  };
  const tree = renderer.create(<ItemContainer item={item} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test("OrderButton Component renders correctly", () => {
  const tree = renderer
    .create(
      <OrderButton
        title="testtitle"
        color={"#FFF"}
        icon={"testicon"}
        onClick={jest.fn()}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test("OrderRow Component renders correctly", async () => {
  jest.mock("react-navigation", () => ({
    withNavigation: (component: React.FC) => component
  }));

  const order = {
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
  };

  const mockProps = {
    navigation: { navigate: jest.fn() },
    order
  };

  const tree = await renderer.create(<OrderRow {...mockProps} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test("ProductItem renders correctly", () => {
  const product = {
    id: "A102",
    description: "Electric screwdriver",
    category: "1",
    price: "49.50"
  };

  const orderId = "1";
  const orderProduct = jest.fn();

  const tree = renderer
    .create(
      <ProductItem
        product={product}
        orderId={orderId}
        orderProduct={orderProduct}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import "react-native";
import * as React from "react";
import ProductItem from "../src/components/Product";
import renderer from "react-test-renderer";

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

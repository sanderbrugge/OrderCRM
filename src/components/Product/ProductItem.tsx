import * as React from "react";
import { Product } from "../../api/Product/product";
import { View, Text } from "react-native";
import { colors, baseColorWithOpacity } from "../../styles/base";
import OrderButton from "../OrderButton";
import ProductStyles from "./Product.styles";

interface IProps {
  product: Product;
}

const ProductItem: React.FC<IProps> = ({ product }) => (
  <View style={ProductStyles.container}>
    <View style={ProductStyles.productInfoContainer}>
      <Text style={ProductStyles.productDescription}>
        {product.description}
      </Text>
      <Text style={ProductStyles.prodcutId}>{product.id}</Text>
    </View>
    <View style={ProductStyles.buttonContainer}>
      <OrderButton
        title={`$${product.price}`}
        onClick={() => console.log("add item")}
      />
    </View>
  </View>
);

export default ProductItem;

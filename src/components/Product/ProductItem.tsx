import * as React from "react";
import { Product } from "../../api/Product/product";
import { View, Text } from "react-native";
import OrderButton from "../OrderButton";
import ProductStyles from "./Product.styles";

interface IProps {
  product: Product;
  orderId: string;
  orderProduct: (orderId: string, product: Product) => void;
}

const ProductItem: React.FC<IProps> = ({ product, orderId, orderProduct }) => {
  const onOrderProductClick = React.useCallback(() => {
    orderProduct(orderId, product);
  }, [product]);

  return (
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
          onClick={onOrderProductClick}
        />
      </View>
    </View>
  );
};

export default ProductItem;

import * as React from "react";
import { Product } from "../../api/Product/product";
import { View, Text } from "react-native";
import OrderButton from "../OrderButton";
import ProductStyles from "./Product.styles";
import { Item } from "../../api/Order/order";

interface IProps {
  product: Product;
  orderId: string;
  orderProduct: (orderId: string, item: Item) => void;
}

function mapProductToOrderItem(product: Product): Item {
  return {
    "product-id": product.id,
    quantity: "1",
    "unit-price": product.price,
    total: product.price
  };
}

const ProductItem: React.FC<IProps> = ({ product, orderId, orderProduct }) => {
  const item = React.useMemo(() => mapProductToOrderItem(product), [product]);
  const onOrderProductClick = React.useCallback(() => {
    orderProduct(orderId, item);
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

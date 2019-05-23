import * as React from "react";
import { View, Text } from "react-native";
import ItemContainer from "../../components/Item";
import RBSheet from "react-native-raw-bottom-sheet";
import AddProduct from "../AddProduct/AddProduct";
import OrderDetailStyles from "./OrderDetail.styles";
import { Order } from "../../api/Order/order";
import { formatPrice } from "../../util/formatNumber";

const SHEET_HEIGHT = 400;
const SHEET_ANIMATION_DURATION = 250;

interface IProps {
  order: Order;
  removeProduct: (orderId: string, productId: string) => void;
  rbSheet: React.MutableRefObject<RBSheet | null>;
}

/**
 * dumb-component to display UI
 *
 * @param param0 the order to display
 */
const OrderDetail: React.FC<IProps> = ({ order, rbSheet, removeProduct }) => (
  <View style={OrderDetailStyles.container}>
    <View style={OrderDetailStyles.itemContainer}>
      <Text style={OrderDetailStyles.total}>
        TOTAL: {formatPrice(order.total)}
      </Text>
    </View>

    {order.items.map(item => (
      <ItemContainer
        orderId={order.id}
        key={item["product-id"]}
        item={item}
        removeProduct={removeProduct}
      />
    ))}

    <RBSheet
      ref={ref => {
        rbSheet.current = ref;
      }}
      height={SHEET_HEIGHT}
      duration={SHEET_ANIMATION_DURATION}
      customStyles={{
        container: {
          borderRadius: 20
        }
      }}
    >
      <AddProduct orderId={order.id} />
    </RBSheet>
  </View>
);

export default OrderDetail;

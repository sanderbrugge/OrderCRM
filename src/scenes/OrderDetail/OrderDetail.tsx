import * as React from "react";
import { View, Text } from "react-native";
import ItemContainer from "../../components/Item";
import RBSheet from "react-native-raw-bottom-sheet";
import AddProduct from "../AddProduct/AddProduct";
import OrderDetailStyles from "./OrderDetail.styles";
import { Order } from "../../api/Order/order";
import { formatPrice } from "../../util/formatNumber";

interface IProps {
  order: Order;
  rbSheet: React.MutableRefObject<RBSheet | null>;
}

/**
 * dumb-component to display UI
 *
 * @param param0 the order to display
 */
const OrderDetail: React.FC<IProps> = ({ order, rbSheet }) => (
  <>
    <View style={OrderDetailStyles.itemContainer}>
      <Text style={OrderDetailStyles.total}>
        TOTAL: {formatPrice(order.total)}
      </Text>
    </View>

    {order.items.map(item => (
      <ItemContainer key={item["product-id"]} item={item} />
    ))}

    <RBSheet
      ref={ref => {
        rbSheet.current = ref;
      }}
      height={400}
      duration={250}
      customStyles={{
        container: {
          borderRadius: 20
        }
      }}
    >
      <AddProduct orderId={order.id} />
    </RBSheet>
  </>
);

export default OrderDetail;

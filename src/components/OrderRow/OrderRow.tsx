import * as React from "react";
import { Order } from "../../api/Order/order";
import { TouchableOpacity, View, Text } from "react-native";
import { OrderStyles } from "./Order.styles";
import FontAwesome, { Icons } from "react-native-fontawesome";

interface IProps {
  order: Order;
  customerName: string;
  onSelect: () => void;
}

/**
 * Dumb-component that is only used to render out the info
 *
 * @param param0 The order to display, the customer's name and the on row select handler
 */
const OrderRow: React.FC<IProps> = ({ order, customerName, onSelect }) => (
  <TouchableOpacity onPress={onSelect}>
    <View style={OrderStyles.container}>
      <View style={OrderStyles.thumbnail}>
        <FontAwesome style={OrderStyles.icon}>{Icons.shoppingCart}</FontAwesome>
        <View style={OrderStyles.itemCount}>
          <Text style={OrderStyles.itemCountText}>{order.items.length}</Text>
        </View>
      </View>
      <View style={OrderStyles.detailsContainer}>
        <Text style={OrderStyles.customerDetailText}>{customerName}</Text>
        <Text style={OrderStyles.orderDetailText}>#{order.id}</Text>
        <Text style={OrderStyles.detailTextPrice}>${order.total}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default OrderRow;

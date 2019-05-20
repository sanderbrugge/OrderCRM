import * as React from "react";
import { Order } from "../../api/order";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { OrderStyles } from "./Order.styles";

interface IProps {
  order: Order;
}

const OrderRow: React.FC<IProps> = ({ order }) => {
  const onSelect = React.useCallback(() => console.log(order.id), [order]);

  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={OrderStyles.container}>
        <View style={OrderStyles.thumbnail}>
          <FontAwesome style={OrderStyles.icon}>
            {Icons.shoppingCart}
          </FontAwesome>
          <View style={OrderStyles.itemCount}>
            <Text style={OrderStyles.itemCountText}>{order.items.length}</Text>
          </View>
        </View>
        <View style={OrderStyles.detailsContainer}>
          <Text style={OrderStyles.detailText}>Order id: {order.id}</Text>
          <Text style={OrderStyles.detailText}>
            Customer id: {order["customer-id"]}
          </Text>
          <Text style={OrderStyles.detailTextPrice}>${order.total}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderRow;

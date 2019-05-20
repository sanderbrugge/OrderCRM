import * as React from "react";
import { Order } from "../../api/order";
import { View, Text } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { colors } from "../../styles/base";

interface IProps {
  order: Order;
}

const OrderRow: React.FC<IProps> = ({ order }) => {
  return (
    <View
      style={{
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey,
        flexDirection: "row"
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 70,
          height: 70,
          margin: 5,
          borderColor: colors.grey,
          borderWidth: 1,
          backgroundColor: colors.grey
        }}
      >
        <FontAwesome
          style={{
            color: colors.black,
            fontSize: 25
          }}
        >
          {Icons.shoppingCart}
        </FontAwesome>
      </View>
      <View style={{ flex: 1, margin: 10 }}>
        <Text>Order id: {order.id}</Text>
        <Text>Customer id: {order["customer-id"]}</Text>
        <Text>#items in cart: {order.items.length}</Text>
        <Text>Price: ${order.total}</Text>
      </View>
    </View>
  );
};

export default OrderRow;

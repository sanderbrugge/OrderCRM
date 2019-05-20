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
        flexDirection: "row",
        marginBottom: 10
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
            color: colors.white,
            fontSize: 30
          }}
        >
          {Icons.shoppingCart}
        </FontAwesome>
        <View
          style={{
            flex: 1,
            position: "absolute",
            top: 12,
            right: 8,
            width: 20,
            height: 20,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            zIndex: 999,
            backgroundColor: colors.green
          }}
        >
          <Text style={{ color: colors.white }}>{order.items.length}</Text>
        </View>
      </View>
      <View style={{ flex: 1, margin: 8 }}>
        <Text style={{ flex: 1 }}>Order id: {order.id}</Text>
        <Text style={{ flex: 1 }}>Customer id: {order["customer-id"]}</Text>
        <Text
          style={{
            flex: 1,
            color: colors.green,
            fontSize: 15,
            fontWeight: "500",
            alignSelf: "flex-end"
          }}
        >
          ${order.total}
        </Text>
      </View>
    </View>
  );
};

export default OrderRow;

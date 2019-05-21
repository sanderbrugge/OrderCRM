import * as React from "react";
import { Order } from "../../api/Order/order";
import { Text } from "react-native";
import { NavigationInjectedProps, NavigationParams } from "react-navigation";

interface IProps extends NavigationInjectedProps<NavigationParams> {}

const OrderDetail: React.FC<IProps> = ({ navigation }) => {
  const order = navigation.getParam("order", {}) as Order;
  return <Text>{order.id}</Text>;
};

export default OrderDetail;

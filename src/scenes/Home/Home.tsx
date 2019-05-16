import * as React from "react";
import { fetchOrders } from "../../api/order.services";
import { Text } from "react-native";

const Home: React.FC = () => {
  fetchOrders();
  return <Text>Hello world!</Text>;
};

export default Home;

import * as React from "react";
import { FlatList, Text, View } from "react-native";
import { fetchOrders } from "../../api/order.services";
import { Order } from "../../api/order";
import HomeStyles from "./Home.styles";
import Header from "../../components/Header";

const Home: React.FC = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={HomeStyles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <Text key={item.id} style={HomeStyles.row}>
            {item.total}
          </Text>
        )}
        keyExtractor={order => order.id}
      />
    </View>
  );
};

const HomeWrapper: React.FC = () => (
  <Header title="Your Orders" canNavigateBack={false} childView={<Home />} />
);

export default HomeWrapper;

import * as React from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import { fetchOrders } from "../../api/order.services";
import { Order } from "../../api/order";
import HomeStyles from "./Home.styles";
import Header from "../../components/Header";

const Home: React.FC = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrders();
      setOrders(data);
    };
    fetchData();
  }, []);

  return (
    <Header
      title="Your Orders"
      canNavigateBack={false}
      childView={
        <SafeAreaView style={HomeStyles.container}>
          <FlatList
            data={orders}
            renderItem={({ item }) => (
              <Text key={item.id} style={HomeStyles.row}>
                {item.total}
              </Text>
            )}
            keyExtractor={order => order.id}
          />
        </SafeAreaView>
      }
    />
  );
};

export default Home;

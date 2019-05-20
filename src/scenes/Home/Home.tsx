import * as React from "react";
import { FlatList, Text, View } from "react-native";
import HomeStyles from "./Home.styles";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { Store } from "../../ducks";
import {
  actions as orderActions,
  AsyncOrders
} from "../../ducks/order.reducer";

interface IHomeProps {
  orders: AsyncOrders;
  fetchOrders: () => void;
}

const Home: React.FC<IHomeProps> = ({ orders, fetchOrders }) => {
  React.useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <View style={HomeStyles.container}>
      <FlatList
        data={orders.orders}
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

interface IProps {
  orders: AsyncOrders;
  fetchOrders: () => void;
}

const HomeWrapper: React.FC<IProps> = ({ orders, fetchOrders }) => (
  <Header
    title="Your Orders"
    canNavigateBack={false}
    childView={<Home orders={orders} fetchOrders={fetchOrders} />}
  />
);

const mapStateToProps = (state: Store) => ({
  orders: state.orders
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchOrders: () => dispatch(orderActions.fetchOrders())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeWrapper);

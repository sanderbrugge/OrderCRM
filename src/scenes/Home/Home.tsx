import * as React from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import HomeStyles from "./Home.styles";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { Store } from "../../ducks";
import {
  actions as orderActions,
  AsyncOrders,
  PENDING,
  SUCCESS,
  FAILURE
} from "../../ducks/order.reducer";
import { colors } from "../../styles/base";
import Error from "../../components/Error";
import OrderRowContainer from "../../components/OrderRow";

interface IHomeProps {
  orders: AsyncOrders;
  fetchOrders: () => void;
}

const Home: React.FC<IHomeProps> = ({ orders, fetchOrders }) => {
  React.useEffect(() => {
    fetchOrders();
  }, []);

  const isFetching = orders.status === PENDING;
  const hasData = orders.status === SUCCESS && orders.data;
  const error = orders.status === FAILURE;

  return (
    <View style={HomeStyles.container}>
      {isFetching && <ActivityIndicator size="large" color={colors.grey} />}

      {hasData && (
        <FlatList
          data={orders.data}
          renderItem={({ item }) => <OrderRowContainer order={item} />}
          keyExtractor={order => order.id}
        />
      )}

      {error && <Error message={orders.error!.message} />}
    </View>
  );
};

interface IProps {
  orders: AsyncOrders;
  fetchOrders: () => void;
}

const HomeWrapper: React.FC<IProps> = ({ orders, fetchOrders }) => (
  <Header
    title="All Orders"
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

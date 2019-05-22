import * as React from "react";
import { View } from "react-native";
import { NavigationInjectedProps, NavigationParams } from "react-navigation";
import Header from "../../components/Header";
import OrderButton from "../../components/OrderButton";
import { Icons } from "react-native-fontawesome";
import { colors } from "../../styles/base";
import OrderDetailStyles from "./OrderDetail.styles";
import HeaderBarButton from "../../components/HeaderBarButton/HeaderBarButton";
import RBSheet from "react-native-raw-bottom-sheet";
import { connect } from "react-redux";
import { Store } from "../../ducks";
import { AsyncOrders } from "../../ducks/order.reducer";
import { Order } from "../../api/Order/order";
import OrderDetail from "./OrderDetail";

interface IProps extends NavigationInjectedProps<NavigationParams> {
  orders: AsyncOrders;
}

/**
 * No need to use the API for this as all of the orders are available in redux.
 *
 * @param orders all the orders available in the global state
 * @param id the ID to lookup
 */
function getOrderById(orders: Order[], id: string) {
  return orders.find(order => order.id === id);
}

/**
 *
 * @param param0 orders to find and the navigation object
 */
const OrderDetailContainer: React.FC<IProps> = ({ orders, navigation }) => {
  const order = React.useMemo(
    () => getOrderById(orders.data, navigation.getParam("id")),
    [orders, navigation]
  );
  const rbSheet = React.useRef<RBSheet | null>(null);

  return (
    <>
      <Header
        title="Order Overview"
        canNavigateBack
        rightBarButton={
          <HeaderBarButton
            icon={Icons.plus}
            onPress={() => rbSheet.current && rbSheet.current.open()}
          />
        }
        childView={<OrderDetail order={order!} rbSheet={rbSheet} />}
      />
      <View style={OrderDetailStyles.orderButtonContainer}>
        <OrderButton
          title="ORDER"
          icon={Icons.shoppingCart}
          color={colors.blue}
          onClick={() => console.log("order placed")}
        />
      </View>
    </>
  );
};

const mapStateToProps = (state: Store) => ({
  orders: state.orders
});

/**
 * I could've added al the orders in the react navigation param as a dependency,
 * which would exclude this component to connect to Redux.
 *
 * But I opted against it because that would cause state management on different places, which is not optimal.
 */
export default connect(
  mapStateToProps,
  null
)(OrderDetailContainer);

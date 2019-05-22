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
import { placeOrder } from "../../api/Order/order.services";
import { actions as orderActions } from "../../ducks/order.reducer";

interface IProps extends NavigationInjectedProps<NavigationParams> {
  orders: AsyncOrders;
  removeProduct: (orderId: string, productId: string) => void;
}

/**
 * No need to use the API for this as all of the orders are available in Redux.
 *
 * @param orders all the orders available in the global state
 * @param id the ID to lookup
 */
function getOrderById(orders: Order[], id: string) {
  return orders.find(order => order.id === id);
}

/**
 * Also exported as named export to be able to test this component without the redux connection.
 *
 * @param param0 All orders, to select by ID and display it's items and the navigation object.
 */
export const OrderDetailContainer: React.FC<IProps> = ({
  orders,
  removeProduct,
  navigation
}) => {
  const order = React.useMemo(
    () => getOrderById(orders.data, navigation.getParam("id")),
    [orders, navigation]
  );
  const [isOrdering, setIsOrdering] = React.useState<boolean>(false);
  const [color, setColor] = React.useState<string>(colors.blue);
  const [icon, setIcon] = React.useState<string>(Icons.shoppingCart);
  const [title, setTitle] = React.useState<string>("ORDER");
  const disabled = isOrdering || (order && order.items.length === 0);

  const submitOrder = async () => {
    setIsOrdering(true);
    try {
      await placeOrder(order!.id);
      setColor(colors.green);
      setIcon(Icons.check);
      setTitle("PLACED");
    } catch (error) {
      console.log(error);
      setColor(colors.red);
      setIcon(Icons.times);
      setTitle("ERROR");
    } finally {
      setIsOrdering(false);
    }
  };

  const onPlaceOrder = React.useCallback(() => submitOrder(), [order]);

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
        childView={
          <OrderDetail
            order={order!}
            rbSheet={rbSheet}
            removeProduct={removeProduct}
          />
        }
      />
      <View style={OrderDetailStyles.orderButtonContainer}>
        <OrderButton
          disabled={disabled}
          title={title}
          icon={icon}
          color={color}
          onClick={onPlaceOrder}
        />
      </View>
    </>
  );
};

const mapStateToProps = (state: Store) => ({
  orders: state.orders
});

const mapDispatchToProps = (dispatch: any) => ({
  removeProduct: (orderId: string, productId: string) =>
    dispatch(orderActions.removeProduct(orderId, productId))
});
/**
 * I could've added al the orders in the react navigation param as a dependency,
 * which would exclude this component to connect to Redux.
 *
 * But I opted against it because that would cause state management on different places, which is not optimal.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailContainer);

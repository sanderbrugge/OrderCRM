import * as React from "react";
import { Text, View } from "react-native";
import { NavigationInjectedProps, NavigationParams } from "react-navigation";
import Header from "../../components/Header";
import OrderButton from "../../components/OrderButton";
import { Icons } from "react-native-fontawesome";
import { colors } from "../../styles/base";
import ItemContainer from "../../components/Item";
import OrderDetailStyles from "./OrderDetail.styles";
import HeaderBarButton from "../../components/HeaderBarButton/HeaderBarButton";
import RBSheet from "react-native-raw-bottom-sheet";
import AddProduct from "../AddProduct/AddProduct";
import { connect } from "react-redux";
import { Store } from "../../ducks";
import { AsyncOrders } from "../../ducks/order.reducer";
import { Order } from "../../api/Order/order";

interface IProps extends NavigationInjectedProps<NavigationParams> {
  orders: AsyncOrders;
}

function getOrderById(orders: Order[], id: string) {
  return orders.find(order => order.id === id);
}

const OrderDetail: React.FC<IProps> = ({ orders, navigation }) => {
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
        childView={
          <>
            <View style={OrderDetailStyles.itemContainer}>
              <Text style={OrderDetailStyles.total}>
                TOTAL: ${order && order.total}
              </Text>
            </View>

            {order &&
              order.items.map(item => (
                <ItemContainer key={item["product-id"]} item={item} />
              ))}

            <RBSheet
              ref={ref => {
                rbSheet.current = ref;
              }}
              height={400}
              duration={250}
              customStyles={{
                container: {
                  borderRadius: 20
                }
              }}
            >
              <AddProduct orderId={order!.id} />
            </RBSheet>
          </>
        }
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
)(OrderDetail);

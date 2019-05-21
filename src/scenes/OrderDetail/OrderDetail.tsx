import * as React from "react";
import { Order } from "../../api/Order/order";
import { Text, View } from "react-native";
import { NavigationInjectedProps, NavigationParams } from "react-navigation";
import Header from "../../components/Header";
import OrderButton from "../../components/OrderButton";
import { Icons } from "react-native-fontawesome";
import { colors } from "../../styles/base";
import ItemContainer from "../../components/Item";
import OrderDetailStyles from "./OrderDetail.styles";

interface IProps extends NavigationInjectedProps<NavigationParams> {}

const OrderDetail: React.FC<IProps> = ({ navigation }) => {
  const order = navigation.getParam("order", {}) as Order;
  return (
    <>
      <Header
        title="Order Overview"
        canNavigateBack
        childView={
          <>
            <View style={OrderDetailStyles.itemContainer}>
              <Text style={OrderDetailStyles.total}>TOTAL: ${order.total}</Text>
            </View>
            {order.items.map(item => (
              <ItemContainer key={item["product-id"]} item={item} />
            ))}
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

export default OrderDetail;

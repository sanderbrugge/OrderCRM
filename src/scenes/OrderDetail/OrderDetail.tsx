import * as React from "react";
import { Order } from "../../api/Order/order";
import { Text, View } from "react-native";
import { NavigationInjectedProps, NavigationParams } from "react-navigation";
import Header from "../../components/Header";
import OrderButton from "../../components/OrderButton";
import { Icons } from "react-native-fontawesome";
import { colors } from "../../styles/base";

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
            <Text>{order.id}</Text>
          </>
        }
      />
      <View style={{ position: "absolute", bottom: 15, left: 20, right: 20 }}>
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

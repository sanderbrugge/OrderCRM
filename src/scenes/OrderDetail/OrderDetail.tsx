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
import HeaderBarButton from "../../components/HeaderBarButton/HeaderBarButton";
import RBSheet from "react-native-raw-bottom-sheet";
import AddProduct from "../AddProduct/AddProduct";

interface IProps extends NavigationInjectedProps<NavigationParams> {}

const OrderDetail: React.FC<IProps> = ({ navigation }) => {
  const order = navigation.getParam("order", {}) as Order;
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
              <Text style={OrderDetailStyles.total}>TOTAL: ${order.total}</Text>
            </View>
            {order.items.map(item => (
              <ItemContainer key={item["product-id"]} item={item} />
            ))}
            <RBSheet
              ref={ref => {
                rbSheet.current = ref;
              }}
              height={400}
              closeOnSwipeDown
              duration={250}
              customStyles={{
                container: {
                  borderRadius: 20
                }
              }}
            >
              <AddProduct />
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

export default OrderDetail;

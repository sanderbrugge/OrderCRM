import * as React from "react";
import { Order } from "../../api/Order/order";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { OrderStyles } from "./Order.styles";
import { getCustomerById } from "../../api/Customer/customer.services";
import { Customer } from "../../api/Customer/customer";

interface IProps {
  order: Order;
}

const OrderRow: React.FC<IProps> = ({ order }) => {
  const onSelect = React.useCallback(() => console.log(order.id), [order]);
  const [customer, setCustomer] = React.useState<Customer | undefined>(
    undefined
  );

  React.useEffect(() => {
    const fetchUserData = async () => {
      const user = await getCustomerById(order["customer-id"]);
      setCustomer(user);
    };

    fetchUserData();
  }, []);

  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={OrderStyles.container}>
        <View style={OrderStyles.thumbnail}>
          <FontAwesome style={OrderStyles.icon}>
            {Icons.shoppingCart}
          </FontAwesome>
          <View style={OrderStyles.itemCount}>
            <Text style={OrderStyles.itemCountText}>{order.items.length}</Text>
          </View>
        </View>
        <View style={OrderStyles.detailsContainer}>
          <Text style={OrderStyles.customerDetailText}>
            {customer ? customer.name : `Customer id: ${order["customer-id"]}`}
          </Text>
          <Text style={OrderStyles.orderDetailText}>#{order.id}</Text>
          <Text style={OrderStyles.detailTextPrice}>${order.total}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderRow;

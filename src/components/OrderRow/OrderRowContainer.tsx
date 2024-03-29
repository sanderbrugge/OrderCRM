import * as React from "react";
import { Order } from "../../api/Order/order";
import { getCustomerById } from "../../api/Customer/customer.services";
import { Customer } from "../../api/Customer/customer";
import OrderRow from "./OrderRow";
import {
  NavigationInjectedProps,
  NavigationParams,
  withNavigation
} from "react-navigation";

interface IProps extends NavigationInjectedProps<NavigationParams> {
  order: Order;
}

/**
 * Container class handling all the fetching and data transforming of an Order
 *
 * @param param0 The order to display in this row.
 */
const OrderRowContainer: React.FC<IProps> = ({ order, navigation }) => {
  const [customer, setCustomer] = React.useState<Customer | undefined>(
    undefined
  );

  // Decided against putting this in Redux as this is not something that needs to be globally available.
  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const customer = await getCustomerById(order["customer-id"]);
        setCustomer(customer);
      } catch (error) {
        console.log(error);
        // add additional error handling logic in here.
        // not being able to retrieve a customer gets handled by displaying the customer's ID instead of the name.
      }
    };

    fetchUserData();
  }, []);

  const onSelect = React.useCallback(
    () => navigation.navigate("OrderDetail", { id: order.id }),
    [order]
  );

  const customerName = customer
    ? customer.name
    : `Customer id: ${order["customer-id"]}`;

  return (
    <OrderRow order={order} customerName={customerName} onSelect={onSelect} />
  );
};

export default withNavigation(OrderRowContainer);

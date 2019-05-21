import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./scenes/Home";
import OrderDetail from "./scenes/OrderDetail/OrderDetail";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    OrderDetail: OrderDetail
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

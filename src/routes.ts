import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./scenes/Home";

const AppNavigator = createStackNavigator(
  {
    Home: Home
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

import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";

const OrderDetailStyles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 200,
    height: 28,
    margin: 10,
    borderRadius: 8,
    backgroundColor: colors.blue
  },
  total: {
    color: colors.white,
    fontSize: 16
  },
  orderButtonContainer: {
    position: "absolute",
    bottom: 15,
    left: 20,
    right: 20
  }
});

export default OrderDetailStyles;

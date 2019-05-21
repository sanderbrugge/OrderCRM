import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";

const OrderButtonStyles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 5
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default OrderButtonStyles;

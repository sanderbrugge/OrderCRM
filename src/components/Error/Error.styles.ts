import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";

const ErrorStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderColor: colors.yellow,
    borderWidth: 2,
    margin: 10,
    borderRadius: 40,
    backgroundColor: colors.yellow
  },
  errorIcon: {
    color: colors.white,
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10
  },
  errorMessage: {
    color: colors.white,
    fontSize: 18
  }
});

export default ErrorStyles;

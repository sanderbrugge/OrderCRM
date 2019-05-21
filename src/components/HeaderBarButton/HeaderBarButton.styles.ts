import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";

const HeaderBarButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: colors.black
  },
  button: {
    width: 28,
    height: 28,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    color: colors.green,
    fontSize: 18
  }
});

export default HeaderBarButtonStyles;

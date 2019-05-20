import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";

const HomeStyles = StyleSheet.create({
  container: {
    height: 1000,
    flex: 1,
    backgroundColor: colors.white
  },
  row: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default HomeStyles;

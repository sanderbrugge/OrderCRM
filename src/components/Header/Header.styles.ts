import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";

export const HeaderStyles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.black
  },
  contentTitleContainer: {
    height: 50
  },
  contentTitle: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: colors.black
  },
  contentContainer: {
    flex: 1,
    marginTop: 5
  },
  barButton: {
    width: 28,
    height: 28,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center"
  }
});

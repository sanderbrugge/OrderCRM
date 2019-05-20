import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";

export const OrderStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    flexDirection: "row",
    marginBottom: 10
  },
  thumbnail: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    margin: 5,
    borderColor: colors.grey,
    borderWidth: 1,
    backgroundColor: colors.grey
  },
  icon: {
    color: colors.white,
    fontSize: 30
  },
  itemCount: {
    flex: 1,
    position: "absolute",
    top: 12,
    right: 8,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    zIndex: 999,
    backgroundColor: colors.green
  },
  itemCountText: {
    color: colors.white
  },
  detailsContainer: {
    flex: 1,
    margin: 8
  },
  detailText: { flex: 1 },
  detailTextPrice: {
    flex: 1,
    color: colors.green,
    fontSize: 15,
    fontWeight: "500",
    alignSelf: "flex-end"
  }
});

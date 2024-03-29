import { StyleSheet } from "react-native";
import { colors, baseColorWithOpacity } from "../../styles/base";

export const OrderStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: baseColorWithOpacity(colors.grey, "30"),
    flexDirection: "row",
    marginBottom: 10,
    paddingBottom: 5
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
  customerDetailText: {
    flex: 1,
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 5
  },
  orderDetailText: {
    flex: 1,
    fontWeight: "300",
    color: colors.grey,
    fontSize: 14
  },
  detailTextPrice: {
    flex: 1,
    color: colors.green,
    fontSize: 15,
    fontWeight: "600",
    alignSelf: "flex-end"
  }
});

import { StyleSheet } from "react-native";
import { colors, baseColorWithOpacity } from "../../styles/base";

const ItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
    borderBottomColor: baseColorWithOpacity(colors.grey, "30"),
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  productName: {
    fontSize: 18,
    color: colors.black,
    marginBottom: 2,
    fontWeight: "600"
  },
  productId: {
    fontSize: 14,
    color: colors.grey,
    fontStyle: "italic"
  },
  overviewContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  orderInformation: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center"
  },
  informationHeader: {
    color: colors.greyMedium,
    fontSize: 14
  },
  informationDetail: {
    fontWeight: "500",
    marginTop: 10
  }
});

export default ItemStyles;

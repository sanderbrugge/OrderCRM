import { StyleSheet } from "react-native";
import { baseColorWithOpacity, colors } from "../../styles/base";

const ProductStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: baseColorWithOpacity(colors.grey, "30"),
    borderBottomWidth: 1,
    height: 70
  },
  productInfoContainer: { flex: 3 },
  productDescription: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "italic"
  },
  prodcutId: {
    fontSize: 16,
    fontWeight: "300",
    color: colors.grey
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  }
});

export default ProductStyles;

import * as React from "react";
import { View, Text } from "react-native";

const AddProduct: React.FC = () => {
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>Add Product</Text>
    </View>
  );
};

export default AddProduct;

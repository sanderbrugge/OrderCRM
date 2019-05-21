import * as React from "react";
import { Item } from "../../api/Order/order";
import { View, Text } from "react-native";
import ItemStyles from "./Item.styles";

interface IProps {
  item: Item;
}

const ItemContainer: React.FC<IProps> = ({ item }) => {
  return (
    <View style={ItemStyles.container}>
      <Text style={ItemStyles.productName}>{item["product-id"]}</Text>
      <Text style={ItemStyles.productId}>{item["product-id"]}</Text>
      <View style={ItemStyles.overviewContainer}>
        <View style={ItemStyles.orderInformation}>
          <Text style={ItemStyles.informationHeader}>QUANTITY</Text>
          <Text style={ItemStyles.informationDetail}>{item.quantity}</Text>
        </View>
        <View style={ItemStyles.orderInformation}>
          <Text style={ItemStyles.informationHeader}>UNIT PRICE</Text>
          <Text style={ItemStyles.informationDetail}>{item["unit-price"]}</Text>
        </View>
        <View style={ItemStyles.orderInformation}>
          <Text style={ItemStyles.informationHeader}>TOTAL</Text>
          <Text style={ItemStyles.informationDetail}>{item.total}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemContainer;

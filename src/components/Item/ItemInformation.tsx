import { View, Text } from "react-native";
import React from "react";
import ItemStyles from "./Item.styles";

interface IProps {
  title: string;
  info: string;
}

/**
 *
 * @param param0 the title and item-info needed to display the overview.
 */
const ItemInformation: React.FC<IProps> = ({ title, info }) => (
  <View style={ItemStyles.orderInformation}>
    <Text style={ItemStyles.informationHeader}>{title}</Text>
    <Text style={ItemStyles.informationDetail}>{info}</Text>
  </View>
);

export default ItemInformation;

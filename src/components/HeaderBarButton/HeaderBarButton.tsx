import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-fontawesome";
import HeaderBarButtonStyles from "./HeaderBarButton.styles";

interface IProps {
  icon: string;
  onPress: () => void;
}

const HeaderBarButton: React.FC<IProps> = ({ onPress, icon }) => (
  <View style={HeaderBarButtonStyles.container}>
    <TouchableOpacity onPress={onPress} style={HeaderBarButtonStyles.button}>
      <FontAwesome style={HeaderBarButtonStyles.icon}>{icon}</FontAwesome>
    </TouchableOpacity>
  </View>
);

export default HeaderBarButton;

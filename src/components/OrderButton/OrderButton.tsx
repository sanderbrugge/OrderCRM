import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { colors } from "../../styles/base";
import FontAwesome from "react-native-fontawesome";
import OrderButtonStyles from "./OrderButton.styles";

interface IProps {
  title: string;
  color?: string;
  icon?: string;
  onClick: () => void;
}

const OrderButton: React.FC<IProps> = ({ title, color, icon, onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        OrderButtonStyles.container,
        {
          backgroundColor: color ? color : colors.blue
        }
      ]}
    >
      <Text style={OrderButtonStyles.buttonText}>
        {icon ? (
          <FontAwesome>
            {icon} {title}
          </FontAwesome>
        ) : (
          <Text>{title}</Text>
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default OrderButton;

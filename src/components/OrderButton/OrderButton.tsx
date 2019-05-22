import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { colors, baseColorWithOpacity } from "../../styles/base";
import FontAwesome from "react-native-fontawesome";
import OrderButtonStyles from "./OrderButton.styles";

interface IProps {
  title?: string;
  color?: string;
  icon?: string;
  disabled?: boolean;
  onClick: () => void;
}

const OrderButton: React.FC<IProps> = ({
  title,
  color,
  disabled,
  icon,
  onClick
}) => {
  const backgroundColor = disabled
    ? baseColorWithOpacity(colors.blue, "80")
    : color
    ? color
    : colors.blue;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onClick}
      style={[
        OrderButtonStyles.container,
        {
          backgroundColor
        }
      ]}
    >
      <Text style={OrderButtonStyles.buttonText}>
        {icon ? (
          <FontAwesome>
            {icon}
            {title ? ` ${title}` : null}
          </FontAwesome>
        ) : (
          <Text>{title}</Text>
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default OrderButton;

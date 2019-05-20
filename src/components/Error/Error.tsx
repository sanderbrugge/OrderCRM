import * as React from "react";
import { View, Text } from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";
import ErrorStyles from "./Error.styles";

interface IProps {
  message: string;
}

const Error: React.FC<IProps> = ({ message }) => {
  return (
    <View style={ErrorStyles.container}>
      <FontAwesome style={ErrorStyles.errorIcon}>{Icons.bug}</FontAwesome>
      <Text style={ErrorStyles.errorMessage}>{message}</Text>
    </View>
  );
};

export default Error;

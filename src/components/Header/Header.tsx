import * as React from "react";
import {
  View,
  ScrollView,
  Animated,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from "react-native";
import { colors } from "../../styles/base";
import { HeaderStyles } from "./Header.styles";
import {
  NavigationInjectedProps,
  NavigationParams,
  withNavigation
} from "react-navigation";
import FontAwesome, { Icons } from "react-native-fontawesome";

const HEADER_MAX_HEIGHT = 90;
const HEADER_MIN_HEIGHT = Platform.OS === "android" ? 50 : 80;
const TITLE_MAX_HEIGHT = 50;
const TITLE_MIN_HEIGHT = 40;

interface IProps extends NavigationInjectedProps<NavigationParams> {
  title: string;
  canNavigateBack: boolean;
  rightBarButton?: React.ReactNode;
  childView: React.ReactNode;
}

const Header: React.FC<IProps> = ({
  title,
  canNavigateBack,
  rightBarButton,
  childView,
  navigation
}) => {
  const [scrollY, setScrollY] = React.useState<Animated.Value>(
    new Animated.Value(0)
  );
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp"
  });

  const titleContainerTop = scrollY.interpolate({
    inputRange: [0, TITLE_MAX_HEIGHT],
    outputRange: [TITLE_MAX_HEIGHT, TITLE_MAX_HEIGHT + 5],
    extrapolate: "clamp"
  });

  const headerZIndex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp"
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT],
    outputRange: [0, 1]
  });

  const bottomTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT],
    outputRange: [1, 0]
  });

  const headerTitleBottom = scrollY.interpolate({
    inputRange: [
      0,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + TITLE_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + TITLE_MIN_HEIGHT + 26
    ],
    outputRange: [-20, -20, -20, 10],
    extrapolate: "clamp"
  });

  const backButtonTop = Platform.OS === "android" ? 20 : 45;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {canNavigateBack && (
        <View
          style={{
            position: "absolute",
            top: backButtonTop,
            left: 10,
            zIndex: 999
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={HeaderStyles.barButton}
          >
            <FontAwesome style={{ color: colors.black, fontSize: 16 }}>
              {Icons.chevronLeft}
            </FontAwesome>
          </TouchableOpacity>
        </View>
      )}
      <Animated.View
        style={[
          HeaderStyles.header,
          {
            height: headerHeight,
            zIndex: headerZIndex,
            opacity: headerTitleOpacity,
            shadowColor: colors.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            elevation: 2
          }
        ]}
      >
        <Animated.View
          style={{ position: "absolute", bottom: headerTitleBottom }}
        >
          <Animated.Text
            style={[HeaderStyles.headerTitle, { opacity: headerTitleOpacity }]}
          >
            {title}
          </Animated.Text>
        </Animated.View>
      </Animated.View>

      <ScrollView
        style={{ flex: 1 }}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ])}
      >
        <Animated.View
          style={[
            HeaderStyles.contentTitleContainer,
            {
              marginTop: titleContainerTop,
              opacity: bottomTitleOpacity,
              flex: 1,
              flexDirection: "row"
            }
          ]}
        >
          <Text style={[HeaderStyles.contentTitle, { flex: 4 }]}>{title}</Text>
          {rightBarButton && rightBarButton}
        </Animated.View>
        <View style={HeaderStyles.contentContainer}>{childView}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withNavigation(Header);

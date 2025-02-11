import React from "react";
import { View } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Text as SvgText } from "react-native-svg";

const GradientText = ({
  text,
  fontSize = 18,
  textStyle = {},
  containerStyle = {},
  gradientColors = ["#F58C27", "#F7674C"],
  gradientDirection = { x1: "0%", y1: "0%", x2: "100%", y2: "0%" }
}) => {
  return (
    <View style={[{ width: "100%", alignItems: "center" }, containerStyle]}>
      <Svg height={fontSize * 1.5} width="100%">
        <Defs>
          <LinearGradient id="grad" {...gradientDirection}>
            <Stop offset="0%" stopColor={gradientColors[0]} />
            <Stop offset="100%" stopColor={gradientColors[1]} />
          </LinearGradient>
        </Defs>
        <SvgText
          fill="url(#grad)"
          fontSize={textStyle.fontSize || fontSize}
          fontWeight={textStyle.fontWeight || "bold"}
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily={textStyle.fontFamily || "System"}
        >
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

export default GradientText;

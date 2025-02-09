import React from "react";
import { View } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Text as SvgText } from "react-native-svg";

const GradientText = ({ text, fontSize = 18, textStyle = {} }) => {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <Svg height={fontSize + 10} width="100%">
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#F58C27" />
            <Stop offset="100%" stopColor="#F7674C" />
          </LinearGradient>
        </Defs>
        <SvgText
          fill="url(#grad)" // Applying the gradient
          fontSize={textStyle.fontSize || fontSize}
          fontWeight={textStyle.fontWeight || "bold"}
          x="50%"
          y={fontSize}
          
          textAnchor="middle" // Centers the text inside the SVG
          dominantBaseline="middle" // Ensures correct vertical centering

          fontFamily={textStyle.fontFamily || "System"} // Allows font customization
        >
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

export default GradientText;

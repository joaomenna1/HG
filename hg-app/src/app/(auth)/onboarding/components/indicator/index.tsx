import { Animated, Dimensions } from "react-native";
import DataTextOnboarding from "../Data/DataTextOnboarding";
import { IndicatorContainer, AnimatedIndicator } from "./styles";
const { width, height } = Dimensions.get("screen");

interface IndicatorProps {
  scrollX: Animated.Value;
}

export const Indicator: React.FC<IndicatorProps> = ({ scrollX }) => {
  const DATA = DataTextOnboarding();
  return (
    <IndicatorContainer>
      {DATA.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1, 0.8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: "clamp",
        });
        return (
          <AnimatedIndicator
            key={`indicator-${index}`}
            style={{
              opacity,
              transform: [{ scale }],
            }}
          />
        );
      })}
    </IndicatorContainer>
  );
};

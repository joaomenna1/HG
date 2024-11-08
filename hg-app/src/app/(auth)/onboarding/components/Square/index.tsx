import { Animated, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { AnimatedSquare } from './styles'


interface SquareProps {
    scrollX: Animated.Value;
  }
  
  export const Square: React.FC<SquareProps> = ({ scrollX }) => {
    const YOLO = Animated.modulo(
      Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
      1,
    );
  
    const rotate = YOLO.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['35deg', '0deg', '35deg'],
    });
  
    const translateX = YOLO.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -height, 0],
    });
  
    return (
      <AnimatedSquare
        style={{
          transform: [{ rotate }],
        }}
      />
    );
  };
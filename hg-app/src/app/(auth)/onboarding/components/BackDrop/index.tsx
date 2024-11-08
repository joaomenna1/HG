import { Animated, Dimensions } from 'react-native';
import { AnimatedBackground } from './styles'

const { width, height } = Dimensions.get('screen');

const bgs = ['#000066', '#0033cc', '#3399ff', '#409080'];

interface BackdropProps {
    scrollX: Animated.Value;
  }
  
  export const Backdrop: React.FC<BackdropProps> = ({ scrollX }) => {
    const backgroundColor = scrollX.interpolate({
      inputRange: bgs.map((_, i) => i * width),
      outputRange: bgs,
    });
  
    return <AnimatedBackground style={{ backgroundColor }} />;
  };
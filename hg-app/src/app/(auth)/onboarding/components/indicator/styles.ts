import styled from 'styled-components/native';
import { Animated } from 'react-native';


export const IndicatorContainer = styled.View`
  position: absolute;
  bottom: 50px;
  flex-direction: row;
`;

export const AnimatedIndicator = styled(Animated.View)`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: #fff;
  margin: 10px;
`;
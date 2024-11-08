import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');


export const AnimatedSquare = styled(Animated.View)`
  width: ${height}px;
  height: ${height}px;
  background-color: ${({ theme }) => theme.colors.base.white};
  border-radius: 86px;
  position: absolute;
  top: -${height * 0.6}px;
  left: -${height * 0.3}px;
`;

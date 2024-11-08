import styled from 'styled-components/native';
import { Animated, TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 100px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding-horizontal: 20px;
`;

export const Button = Animated.createAnimatedComponent(styled(TouchableOpacity)`
  width: 160px;
  padding-vertical: 15px;
  padding-horizontal: 40px;
  border-radius: 8px;
  align-items: center;
`);


export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

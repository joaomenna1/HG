import styled from "styled-components/native";
import { Text, Animated } from "react-native";
import Typography from "../../Typography";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View``;

type IContentprops = {
  error: boolean;
};
export const Content = styled.View<IContentprops>`
  border-width: 1px;
  border-radius: 5px;
  justify-content: center;
  border-color: ${({ theme, error }) =>
    !!error ? theme.colors.brand.red : theme.colors.base.gray_7};
`;

export const AnimatedText = styled(Animated.createAnimatedComponent(Text))`
  position: absolute;
  color: ${({ theme }) => theme.colors.base.gray_1};
  background-color: ${({ theme }) => theme.colors.base.white};
  padding: 0px 4px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 10px 16px;
  color: ${({ theme }) => theme.colors.base.gray_2};
  font-size: ${({ theme }) => theme.font_size.body.md}px;
  line-height: ${({ theme }) => theme.line_height.md}px;
`;

export const IconArea = styled.View`
  margin-right: 16px;
`;

export const IconButton = styled.TouchableOpacity``;

type IIconprops = {
  showPassword: boolean;
  error: boolean;
  name?:string;
};
export const Icon = styled(Ionicons).attrs<IIconprops>(({ theme,name, showPassword, error }) => ({
  name: name || (showPassword ? 'eye-outline' : 'eye-off-outline'), 
  color: error ? theme.colors.brand.red : theme.colors.base.gray_4,
  size: 24,
}))<IIconprops>``;

export const ErrorText = styled(Typography).attrs(() => ({
  color: "red",
  fontSize: "body_xs",
  lineHeight: "xs",
}))`
  margin-top: 4px;
  margin-left: 4px;
`;

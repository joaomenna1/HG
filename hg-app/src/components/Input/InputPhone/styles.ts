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

export const ErrorText = styled(Typography).attrs(() => ({
  color: "red",
  fontSize: "body_xs",
  lineHeight: "xs",
}))`
  margin-top: 4px;
  margin-left: 4px;
`;

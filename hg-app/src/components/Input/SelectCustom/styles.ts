import styled from "styled-components/native";
import Typography from "../../Typography";
import { MaterialIcons } from "@expo/vector-icons";
import { boolean } from "yup";

export const Container = styled.View`
  flex-direction:column;
  gap:4px;
`;

type IContentProps = {
  error: boolean;
}

export const Content = styled.View<IContentProps>`
height:44px;

border-width:1px;
padding: 0px 16px;

border-radius:4px;

border-color: ${({ theme, error }) => error ? theme.colors.brand.red : theme.colors.base.gray_7};

`;

export const Select = styled.TouchableOpacity`
flex:1;
flex-direction:row;
align-items:center;
justify-content:space-between;
`;

type IconProps = {
  isDown: boolean;
  error: boolean

};

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, isDown, error }) => ({
    name: isDown ? "keyboard-arrow-up" : "keyboard-arrow-down",
    color: error ? theme.colors.brand.red :theme.colors.base.gray_4,
    size: 24,
  })
) <IconProps>``;

type ILabelProps = {
  isLabel: boolean;
  error: boolean
};


export const Label = styled(Typography).attrs<ILabelProps>(({ isLabel, error }) => ({
  color: isLabel ? "gray_2" : error ? "red" : "gray_4",
})) <ILabelProps>``;

export const ErrorText = styled(Typography).attrs(() => ({
  color: "red",
  fontSize: "body_xs",
  lineHeight: "xs",
}))`
  margin-top: 4px;
  margin-left: 4px;
`;

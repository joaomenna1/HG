import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import Typography from "../Typography";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0px;
  z-index: 9999;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonMenu = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))`
  height: 38px;
  width: 38px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${({ theme }) => theme.colors.brand.primary};
`;

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
  name: "chevron-back",
  size: 24,
  color: theme.colors.base.white,
}))``;

export const Title = styled(Typography).attrs(() => ({
  fontSize: "title_sm",
  fontFamily: "spartan_semiBold",
}))`
  margin-left: 12px;
`;

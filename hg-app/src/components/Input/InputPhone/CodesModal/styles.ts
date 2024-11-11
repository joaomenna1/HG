import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { FlashList } from "@shopify/flash-list";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  height: 600px;
  width: ${width / 1.09}px;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.brand.primary};
`;

export const ListCodes = styled(FlashList)``;

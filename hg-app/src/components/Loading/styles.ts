import styled from "styled-components/native";
import { LoadingProps } from ".";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs<LoadingProps>(
  ({ theme, color }) => {
    if (!theme || !theme.colors) {
      return { color: color || "#000" };
    }

    const { colors } = theme;

    return {
      color:
        color === "gray_1" ? colors.base.gray_1 :
        color === "gray_2" ? colors.base.gray_2 :
        color === "gray_3" ? colors.base.gray_3 :
        color === "gray_4" ? colors.base.gray_4 :
        color === "gray_5" ? colors.base.gray_5 :
        color === "gray_6" ? colors.base.gray_6 :
        color === "gray_7" ? colors.base.gray_7 :
        color === "primary" ? colors.brand.primary :
        color === "secondary" ? colors.brand.secondary :
        color === "red" ? colors.brand.red :
        color === "green" ? colors.brand.green :
        color === "blue" ? colors.brand.blue :
        color === "yellow" ? colors.brand.yellow :
        color === "white" ? colors.base.white :
        color || "#000",
    };
  }
)<LoadingProps>`
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;

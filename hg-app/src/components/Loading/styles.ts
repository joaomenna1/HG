import styled from "styled-components/native";
import { LoadingProps } from ".";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs<LoadingProps>(
  ({ theme, color }) => ({
    color: (() => {
      const { colors } = theme;

      if (color === "gray_1") return colors.base.gray_1;
      if (color === "gray_2") return colors.base.gray_2;
      if (color === "gray_3") return colors.base.gray_3;
      if (color === "gray_4") return colors.base.gray_4;
      if (color === "gray_5") return colors.base.gray_5;
      if (color === "gray_6") return colors.base.gray_6;
      if (color === "gray_7") return colors.base.gray_7;
      if (color === "primary") return colors.brand.primary;
      if (color === "secondary") return colors.brand.secondary;
      if (color === "red") return colors.brand.red;
      if (color === "green") return colors.brand.green;
      if (color === "blue") return colors.brand.blue;
      if (color === "yellow") return colors.brand.yellow;
      if (color === "white") return colors.base.white;
      else return color;
    })(),
  })
)<LoadingProps>`
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;

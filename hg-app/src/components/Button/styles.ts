import styled from "styled-components/native";
import Typography from "../Typography";
import { AntDesign } from "@expo/vector-icons";
import { ButtonProps, ButtonStyle } from ".";

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border-width: 1px;

  border-color: ${({ theme, variant }) => {
    if (variant === "primary" || variant === "outline") {
      return theme.colors.brand.primary;
    }

    if (variant === "secondary") {
      return theme.colors.brand.secondary;
    }

    if (variant === "link") {
      return "transparent";
    }

    if (variant === "sucess" || variant === "sucess-outline") {
      return theme.colors.brand.green;
    }

    if (variant === "error" || variant === "error-outline") {
      return theme.colors.brand.red;
    }

    if (variant === "grey") {
      return theme.colors.base.gray_4;
    }
  }};

  background-color: ${({ theme, variant }) => {
    if (variant === "primary") {
      return theme.colors.brand.primary;
    }

    if (variant === "secondary") {
      return theme.colors.brand.secondary;
    }

    if (
      variant === "outline" ||
      variant === "link" ||
      variant === "sucess-outline" ||
      variant === "error-outline" ||
      variant === "grey"
    ) {
      return "transparent";
    }

    if (variant === "sucess") {
      return theme.colors.brand.green;
    }

    if (variant === "error") {
      return theme.colors.brand.red;
    }
  }};
`;

export const Loading = styled.ActivityIndicator.attrs<ButtonStyle>(
  ({ theme, variant, color }) => ({
    color: (() => {
      if (
        variant === "primary" ||
        variant === "secondary" ||
        variant === "sucess" ||
        variant === "error"
      ) {
        return theme.colors.base.white;
      }
      if (variant === "outline" || variant === "link") {
        return theme.colors.brand.secondary;
      }

      if (variant === "sucess-outline") {
        return theme.colors.brand.green;
      }

      if (variant === "error-outline") {
        return theme.colors.brand.red;
      }

      if (variant === "grey") {
        return theme.colors.base.gray_4;
      }

      return color;
    })(),
  })
)<ButtonStyle>``;

export const Content = styled.View<ButtonStyle>`
  flex-direction: ${({ iconPosition }) =>
    iconPosition === "left" ? "row" : "row-reverse"};
  align-items: center;
  justify-content: center;

  gap: 12px;
`;

export const Title = styled(Typography).attrs<ButtonStyle>(({ theme }) => ({
  fontFamily: "inter_semiBold",
  fontSize: theme.font_size.title.lg,
}))<ButtonStyle>`
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
      case 'secondary':
      case 'sucess':
      case 'error':
        return theme.colors.base.white;
      case 'sucess-outline':
        return theme.colors.brand.green;
      case 'outline':
      case 'link':
        return theme.colors.brand.primary;
      case 'error-outline':
        return theme.colors.brand.red;
      case 'grey':
        return theme.colors.base.gray_4;
      default:
        return theme.colors.base.white;
    }
  }};
`;


export const Icon = styled(AntDesign).attrs<ButtonStyle>(
  ({ theme, variant, iconName, disabled }) => ({
    size: 24,
    name: iconName,
    color: (() => {
      if (variant === "primary") {
        return disabled
          ? hexToRgba(theme.colors.brand.primary, 0.7)
          : theme.colors.base.white;
      }

      if (variant === "secondary") {
        return disabled
          ? hexToRgba(theme.colors.brand.secondary, 0.4)
          : theme.colors.base.white;
      }

      if (variant === "sucess") {
        return disabled
          ? hexToRgba(theme.colors.brand.green, 0.7)
          : theme.colors.base.white;
      }

      if (variant === "sucess-outline") {
        return disabled
          ? hexToRgba(theme.colors.brand.green, 0.7)
          : theme.colors.brand.green;
      }

      if (variant === "outline" || variant === "link") {
        return disabled
          ? hexToRgba(theme.colors.brand.primary, 0.4)
          : theme.colors.brand.primary;
      }

      if (variant === "error") {
        return disabled
          ? hexToRgba(theme.colors.brand.red, 0.7)
          : theme.colors.base.white;
      }

      if (variant === "error-outline") {
        return disabled
          ? hexToRgba(theme.colors.brand.red, 0.7)
          : theme.colors.brand.red;
      }
    })(),
  })
)<ButtonStyle>``;

const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

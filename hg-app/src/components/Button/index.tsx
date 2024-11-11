import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Loading, Content, Title, Icon } from "./styles";
import { AntDesign } from "@expo/vector-icons";

export type ButtonStyle = {
  iconName?: keyof typeof AntDesign.glyphMap;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  disabled?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "link"
    | "sucess"
    | "sucess-outline"
    | "error"
    | "error-outline"
    | "grey";
};

export type ButtonProps = TouchableOpacityProps &
  ButtonStyle & {
    title: string | React.ReactNode;
    onPress: () => void;
  };

const Button = ({
  onPress,
  isLoading = false,
  iconName,
  iconPosition = "left",
  disabled,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <Container
      onPress={onPress}
      variant={variant}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <Loading variant={variant} />
      ) : (
        <Content iconPosition={iconPosition}>
          {iconName && (
            <Icon name={iconName} variant={variant} disabled={disabled} />
          )}
          <Title variant={variant} disabled={disabled}>
            {props.title}
          </Title>
        </Content>
      )}
    </Container>
  );
};

export default Button;

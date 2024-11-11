import React, { useRef, useState, useEffect } from "react";
import { Animated, ViewStyle, TextInputProps } from "react-native";
import {
  Container,
  Content,
  AnimatedText,
  InputArea,
  Input,
  IconArea,
  IconButton,
  Icon,
  ErrorText,
} from "./styles";
import theme from "../../../theme";

type InputCustomProps = {
  containerStyle?: ViewStyle;
  placeholder: string;
  onChangeText: (text: string) => void;
  error?: string | undefined;
};

export type InputProps = TextInputProps & InputCustomProps;

const InputCustom = ({
  containerStyle,
  placeholder,
  onChangeText,
  error,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("");
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);
  const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    animatedLabel(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) {
      animatedLabel(0);
    }
  };

  const handleTextChange = (text: string) => {
    setText(text);
    if (onChangeText) {
      onChangeText(text);
    }
    if (text) {
      animatedLabel(1);
    } else {
      animatedLabel(isFocused ? 1 : 0);
    }
  };

  const animatedLabel = (toValue: number) => {
    Animated.timing(labelPosition, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    // Atualize o estado interno quando o valor do formulário mudar
    setText(props.value || "");
    if (props.value) {
      animatedLabel(1);
    } else {
      animatedLabel(isFocused ? 1 : 0);
    }
  }, [props.value, isFocused]);

  const labelStyle = {
    left: 12,
    top: labelPosition.interpolate({
      inputRange: [0, 0.6],
      outputRange: [14.5, 0],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 5],
      outputRange: [theme.colors.base.gray_4, theme.colors.base.gray_5],
    }),
  };

  return (
    <Container style={containerStyle}>
      <Content error={!!error}>
        <AnimatedText
          style={[labelStyle, !!error && { color: theme.colors.brand.red }]}
        >
          {placeholder}
        </AnimatedText>
        <InputArea>
          <Input
            {...props}
            value={text}
            autoCorrect={false}
            onBlur={handleBlur}
            onFocus={handleFocus}
            textAlignVertical="center"
            maxLength={props.maxLength}
            secureTextEntry={showPassword}
            onChangeText={handleTextChange}
            allowFontScaling={false}
            textContentType={props.secureTextEntry ? "newPassword" : "none"}
          />
          {props.secureTextEntry && !!text && (
            <IconArea>
              <IconButton onPress={() => setShowPassword(!showPassword)}>
                <Icon showPassword={!showPassword} error={!!error} />
              </IconButton>
            </IconArea>
          )}
        </InputArea>
      </Content>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default InputCustom;

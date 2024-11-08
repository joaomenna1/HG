import React from "react";
import { Container, LoadingIndicator } from "./styles";
import { ActivityIndicatorProps } from "react-native";
import * as T from "./type";

type LoadingStyle = {
  color?: T.Colors;
  opacity?: T.Opacity;
};

export type LoadingProps = ActivityIndicatorProps & LoadingStyle;

const Loading = ({ ...props }: LoadingProps) => {
  return (
    <Container {...props}>
      <LoadingIndicator
        {...props}
        color={props.color}
        opacity={props.opacity}
      />
    </Container>
  );
};

export default Loading;

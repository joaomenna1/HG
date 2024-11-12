import React from "react";
import { TextProps } from "react-native";
import { Container } from "./styled";
import * as T from "../../theme/type";

export type TypographyStyle = {
  textAlign?: T.TextAlign;
  fontFamily?: T.FontFamily;
  lineHeight?: T.LineHeight;
  fontSize?: T.FontSize;
  letterSpacings?: T.LetterSpacings;
  color?: T.Colors;
};

export type TypographyProps = TextProps & TypographyStyle;

const Typography: React.FC<TypographyProps> = ({
  children,
  textAlign,
  fontFamily,
  lineHeight,
  fontSize,
  letterSpacings,
  color,
  ...rest
}) => {
  return (
    <Container
      textAlign={textAlign}
      fontFamily={fontFamily}
      lineHeight={lineHeight}
      fontSize={fontSize}
      letterSpacings={letterSpacings}
      color={color}
      {...rest}
      allowFontScaling={false}
    >
      {children}
    </Container>
  );
};

export default Typography;

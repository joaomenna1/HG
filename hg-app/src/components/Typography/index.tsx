import { TextProps } from "react-native";
import { Container } from "./styled";
import * as T from "./../../theme/type";

export type TypographyStyle = {
  textAlign?: T.TextAlign;
  fontFamily?: T.FontFamily;
  lineHeight?: T.LineHeight;
  fontSize?: T.FontSize;
  letterSpacings?: T.LetterSpacings;
  color?: T.Colors;
};

export type TypographyProps = TextProps & TypographyStyle;

const Typography = ({ ...props }: TypographyProps) => {
  return (
    <Container {...props} allowFontScaling={false}>
      {props.children}
    </Container>
  );
};

export default Typography;

import styled from "styled-components/native";
import { TypographyStyle } from ".";
import selectColor from "../../theme/selectColor";

export const Container = styled.Text<TypographyStyle>`
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};

  font-family: ${({ theme, fontFamily }) => {
    return theme.font_family[fontFamily ?? "inter_regular"];
  }};

  line-height: ${({ theme, lineHeight }) => {
    return theme.line_height[lineHeight ?? "md"];
  }}px;

  letter-spacing: ${({ theme, letterSpacings }) => {
    return theme.letter_spacings[letterSpacings ?? "normal"];
  }}px;

  font-size: ${({ theme, fontSize }) => {
    const { font_size } = theme;

    if (fontSize === "body_base") return font_size.body.base;
    if (fontSize === "body_xs") return font_size.body.xs;
    if (fontSize === "body_sm") return font_size.body.sm;
    if (fontSize === "body_md") return font_size.body.md;
    if (fontSize === "body_lg") return font_size.body.lg;
    if (fontSize === "body_2xl") return font_size.body["2xl"];
    if (fontSize === "title_xs") return font_size.title.xs;
    if (fontSize === "title_sm") return font_size.title.sm;
    if (fontSize === "title_md") return font_size.title.md;
    if (fontSize === "title_lg") return font_size.title.lg;
    if (fontSize === "title_xl") return font_size.title.xl;
    if (fontSize === "title_2xl") return font_size.title["2xl"];
    if (fontSize === "title_3xl") return font_size.title["3xl"];
    if (fontSize === "title_4xl") return font_size.title["4xl"];
    else return font_size.body.md;
  }}px;

  color: ${({ color }) => selectColor(color)};
`;

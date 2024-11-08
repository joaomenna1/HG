import theme from ".";

export type TextAlign = "auto" | "center" | "justify" | "left" | "right";

export type Direction = "column" | "column-reverse " | "row" | "row-reverse";
export type Position = "absolute" | "fixed" | "relative" | "static" | "sticky" | "unset"

export type Content = "baseline" | "center" | "first baseline" | "flex-end" | "flex-start" | "last baseline" | "left" | "right" | "safe" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | "unsafe" |"inherit" | "initial" | "unset";

export type FontFamily = keyof typeof theme.font_family;

export type LineHeight = keyof typeof theme.line_height;

export type FontSizeType = keyof typeof theme.font_size;

export type Sizes = keyof typeof theme.font_size.body;

export type LetterSpacings = keyof typeof theme.letter_spacings;

export type FontSizeTitle =
  | "title_xs"
  | "title_sm"
  | "title_md"
  | "title_lg"
  | "title_xl"
  | "title_2xl"
  | "title_3xl"
  | "title_4xl";

export type FontSizeBody =
  | "body_base"
  | "body_xs"
  | "body_sm"
  | "body_md"
  | "body_lg"
  | "body_2xl";

export type FontSize = FontSizeTitle | FontSizeBody;

export type BaseColors = keyof typeof theme.colors.base;

export type BrandColors = keyof typeof theme.colors.brand;

export type Colors = BaseColors | BrandColors | "transparent";

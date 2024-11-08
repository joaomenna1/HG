import theme from "../../theme";

export type Opacity =
  | 1
  | 0.9
  | 0.8
  | 0.7
  | 0.6
  | 0.5
  | 0.4
  | 0.3
  | 0.2
  | 0.1
  | 0;

export type BaseColors = keyof typeof theme.colors.base;

export type BrandColors = keyof typeof theme.colors.brand;

export type Colors = BaseColors | BrandColors;

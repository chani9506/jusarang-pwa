enum BrandColor {
  Purple = '#663399',
  Orange = 'orange',
}

enum GrayScale {
  Black = '#212121',
  White = '#FFFFFF',
}

export class Color {
  public static readonly Primary = BrandColor.Purple;
  public static readonly Secondary = BrandColor.Orange;
  public static readonly Black = GrayScale.Black;
  public static readonly White = GrayScale.White;
}

export enum FontFamily {
  Primary = "'Open Sans', arial, sans-serif",
}

export enum FontWeight {
  SemiBold = 600,
  Bold = 700,
  Normal = 400,
  Light = 300,
}

export enum FontSize {
  XSmall = '10px',
  Small = '12px',
  Medium = '14px',
  Large = '20px',
  XLarge = '50px',
}

export enum Spacing {
  XSmall = '4px',
  Small = '8px',
  Medium = '16px',
  Large = '24px',
  XLarge = '32px',
}

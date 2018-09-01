enum BrandColor {
  Blue = '#3B72FF',
  Red = '#B71C1C',
}

enum GrayScale {
  Black = '#212121',
  White = '#FAFAFA',
  GrayXLight = '#E0E0E0',
  GrayLight = '#BDBDBD',
  Gray = '#757575',
  GrayDark = '#616161',
  GrayXDark = '#424242',
}

export class Color {
  public static readonly Primary = BrandColor.Blue;
  public static readonly Secondary = BrandColor.Red;
  public static readonly Black = GrayScale.Black;
  public static readonly White = GrayScale.White;
  public static readonly GrayXLight = GrayScale.GrayXLight;
  public static readonly GrayLight = GrayScale.GrayLight;
  public static readonly Gray = GrayScale.Gray;
  public static readonly GrayDark = GrayScale.GrayDark;
  public static readonly GrayXDark = GrayScale.GrayXDark;
  public static readonly Surface = GrayScale.Black;
}

export enum Background {
  Color = GrayScale.White,
}

export enum FontFamily {
  Primary = 'Roboto, sans-serif',
}

export enum FontWeight {
  SemiBold = 600,
  Bold = 700,
  Normal = 400,
  Light = 300,
}

export enum FontSize {
  XSmall = '14px',
  Small = '16px',
  Medium = '20px',
  Large = '34px',
  XLarge = '48px',
}

export enum Spacing {
  XSmall = '4px',
  Small = '8px',
  Medium = '16px',
  Large = '24px',
  XLarge = '32px',
}

export enum IconSize {
  Medium = '20px',
}

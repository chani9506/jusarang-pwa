import styled from 'styled-components';
import { Color, FontFamily, FontSize, FontWeight } from '../obj.constants';

export const HDisplay = styled.label`
  color: ${Color.Primary};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  font-size: 60px;
`;

export const H1 = styled.h1`
  margin: 0;
  color: ${Color.Black};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.XLarge};
`;

export const H2 = styled.h2`
  margin: 0;
  color: ${Color.Black};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.Large};
`;

export const H3 = styled.h3`
  margin: 0;
  color: ${Color.Black};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.Medium};
`;

export const Body = styled.p`
  color: ${Color.Black};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.Medium};
`;

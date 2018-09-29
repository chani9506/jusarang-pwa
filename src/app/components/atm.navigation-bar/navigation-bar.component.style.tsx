import styled from 'styled-components';
import { Color, FontFamily, FontSize, FontWeight, Spacing } from '../obj.constants';
import { fixedHeaderHeight } from '../org.header/header.component.style';
import { Link } from '@app/core/router';

export const navigationBarHeight = 40;

export const NavigationBarStyled = styled.div`
  background-color: ${Color.Primary};
  height: ${navigationBarHeight}px;
  position: sticky;
  top: ${fixedHeaderHeight}px;
  margin: 0 ${Spacing.Small};
  z-index: 98;
`;

export const NavigationBarItemStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100%;
`;

export const NavigationBarLabelStyled = styled.label`
  color: ${Color.White};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.Small};
`;

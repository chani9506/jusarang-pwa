import { Color, FontFamily, FontSize, FontWeight, Spacing } from '../obj.constants';
import styled from 'styled-components';
import { Link } from '@app/core/router/link.component';

export const HamburgerMenuItemStyled = styled(Link)`
  display: flex;
  height: 44px;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
`;

export const HamburgerMenuLabelStyled = styled.label`
  pointer-events: none;
  color: ${Color.White};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
  font-size: ${FontSize.Small};
`;

export const HamburgerMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${Spacing.Medium};
  height: 100%;
`;

export const HamburgerMenuHeaderStyled = styled.div`
  margin-top: ${Spacing.Large};
  margin-bottom: 60px;
`;

// TODO: Remove unused style
// const DismissButtonSize = 16;

// export const HamburgerMenuDismissButtonStyled = styled.div`
//   position: relative;
//   width: ${DismissButtonSize}px;
//   height: ${DismissButtonSize}px;
//   &:before, &:after {
//     content: '';
//     position: absolute;
//     height: 2px;
//     width: ${DismissButtonSize}px;
//     top: 50%;
//     left: 0;
//     background: ${Color.GrayLight};
//   }
//   &:before {
//     transform: rotate(45deg);
//     margin-top: -1px;
//   }
//   &::after {
//     transform: rotate(-45deg);
//     margin-top: -1px;
//   }
// `;

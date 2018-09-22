import { Color, Spacing } from '../obj.constants';
import styled from 'styled-components';
import { HamburgerButtonProps } from './hamburger-button.component';

const hamburgerBarWidth = 25;
const hamburgerBarHeight = 2;
const hamburgerBarColor = Color.Black;

export const HamburgerInnerStyled = styled.div`
  position: relative;
  width: ${hamburgerBarWidth}px;
  height: ${hamburgerBarHeight}px;
  background: ${hamburgerBarColor};
  transition: .5s;
  border-radius: 8px;

  ${(props: HamburgerButtonProps) => props.active ?
    'background: transparent;'
    : ''}

  &:before, &:after {
    display: block;
    content: '';
    height: ${hamburgerBarHeight}px;
    width: ${hamburgerBarWidth}px;
    position: absolute;
    background: ${hamburgerBarColor};
    z-index: -1;
    transition: .5s .3s;
    border-radius: 8px;

    ${(props: HamburgerButtonProps) => props.active ?
      'transition: .5s;'
      : ''}
  }

  &:before {
    top: ${(props: HamburgerButtonProps) => props.active ? '0px' : '7px'};
    ${(props: HamburgerButtonProps) => props.active ?
      `
        transform: rotate(-45deg);
        background: ${Color.White};
        width: ${hamburgerBarWidth - 5}px;
        left: 13%;
      `
      : ''}
  }
  &:after {
    top: ${(props: HamburgerButtonProps) => props.active ? '0px' : '-7px'};
    ${(props: HamburgerButtonProps) => props.active ?
      `
        transform: rotate(45deg);
        background: ${Color.White};
        width: ${hamburgerBarWidth - 5}px;
        left: 13%;
      `
      : ''}
  }
`;

export const HamburgerButtonStyled = styled.div`
  display: inline-block;
  position: relative;
  transition: .3s;
  padding: ${Spacing.Medium} ${Spacing.XSmall};
  cursor: pointer;
  user-select: none;
  opacity: .8;
  z-index: 102;

  ${HamburgerInnerStyled}:before, ${HamburgerInnerStyled}:after {
    transition: .3s;
  }
`;

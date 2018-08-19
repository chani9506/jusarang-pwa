import { Color } from '../obj.constants';
import styled from 'styled-components';
import { HamburgerButtonProps } from './hamburger-button.component';

export const HamburgerButtonStyled = styled.div`
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0.05);
  display: flex;
  text-transform: none;
  position: relative;
  width: 24px;
  height: 24px;
  border: 0;
  background-color: transparent;
  margin: 0;
  z-index: 3;
  line-height: 0;
  &:focus {
    outline: 0;
  }
`;

export const HamburgerInnerStyled = styled.span`
  &, &:before, &:after {
    display: block;
    position: absolute;
    height: 2px;
    background-color: ${Color.GrayLight};
    border-radius: 4px;
  }
  width: 18px;
  top: 50%;
  margin-top: -1px;
  transition-timing-function: ${(props: HamburgerButtonProps) =>
    props.active ? 'none' : 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
  transition-duration: 0.22s;
  transition: transform .15s ease;
  &:before {
    content: '';
    width: 24px;
    top: ${(props: HamburgerButtonProps) => props.active ? '0' : '-6px'};
    opacity: ${(props: HamburgerButtonProps) => props.active ? '0' : '1'};
    transition: ${(props: HamburgerButtonProps) => props.active ? 'none'
      : 'transform .15s ease, top 0.1s 0.25s ease-in, opacity 0.1s ease-in;'};
  }
  &:after {
    content: '';
    width: 12px;
    bottom: ${(props: HamburgerButtonProps) => props.active ? '0' : '-6px'};
    transition: ${(props: HamburgerButtonProps) => props.active ?
      'none'
      : 'transform .15s ease, bottom 0.1s 0.25s ease-in'};
  }
`;

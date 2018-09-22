import styled from 'styled-components';
import { Color } from '../obj.constants';
import { DrawerProps } from './drawer.component';

export const DrawerStyled = styled.div`
  position: fixed;
  width: 100%;
  height: ${(props: DrawerProps) => (props.active) ? '100%' : '0'};
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: ${(props: DrawerProps) => (props.active) ? '101' : '-1'};
  transition: ${(props: DrawerProps) => (props.active) ? 'none' : 'height .3s .3s'};
`;

export const DrawerMenuStyled = styled.div`
  position: absolute;
  background-color: ${Color.Surface};
  width: 85%;
  height: 100%;
  right: ${(props: DrawerProps) => (props.active) ? 0 : '-85%'};
  top: 0;
  transition: ${(props: DrawerProps) => (props.active) ? 'right .3s' : 'right .3s, z-index .3s .3s'};
  z-index: ${(props: DrawerProps) => (props.active) ? '2' : '-2'};
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  overscroll-behavior: contain;
`;

export const DrawerOverlayStyled = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  background-color: ${Color.Black};
  opacity: ${(props: DrawerProps) => (props.active) ? '.3' : '0'};
  z-index: ${(props: DrawerProps) => (props.active) ? '1' : '-1'};
  pointer-events: ${(props: DrawerProps) => (props.active) ? '0' : 'none'};
  transition: ${(props: DrawerProps) => (props.active) ? 'opacity .3s ease-out'
    : 'opacity .3s ease-out, z-index .3s .3s'};
`;

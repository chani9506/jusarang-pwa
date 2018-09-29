import styled from 'styled-components';
import { DrawerProps } from './drawer.component';

export const DrawerStyled = styled.div`
  position: fixed;
  width: 100%;
  height: ${(props: DrawerProps) => (props.active) ? '100%' : '0'};
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: ${(props: DrawerProps) => (props.active) ? '101' : '-1'};
  transition: ${(props: DrawerProps) => (props.active) ? 'none' : 'height .3s .3s, z-index .3s .3s'};
`;

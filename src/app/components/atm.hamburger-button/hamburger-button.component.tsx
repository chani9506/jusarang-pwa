import * as React from 'react';

import { HamburgerButtonStyled, HamburgerInnerStyled } from './hamburger-button.component.style';

export interface HamburgerButtonProps {
  active?: boolean;
  onClick?: () => void;
}

export const HamburgerButton = (props: HamburgerButtonProps) => {
  return (
    <HamburgerButtonStyled onClick={props.onClick}>
      <HamburgerInnerStyled active={props.active}/>
    </HamburgerButtonStyled>
  );
};

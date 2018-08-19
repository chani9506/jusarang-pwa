import * as React from 'react';

import {
  HamburgerMenuDismissButtonStyled,
  HamburgerMenuHeaderStyled,
  HamburgerMenuItemStyled,
  HamburgerMenuLabelStyled,
  HamburgerMenuStyled,
} from './hamburger-menu.component.style';

export interface HamburgerMenuProps {
  onClick: () => void;
}

export interface HamburgerMenuItemProps {
  onClick: () => void;
  to: string;
}

const HamburgerMenuItem: React.SFC<HamburgerMenuItemProps> = props => {
  return (
    <HamburgerMenuItemStyled to={props.to} onClick={props.onClick}>
      <HamburgerMenuLabelStyled>
      {props.children}
      </HamburgerMenuLabelStyled>
    </HamburgerMenuItemStyled>
  );
};

export class HamburgerMenu extends React.Component<HamburgerMenuProps, any> {
  static Item = HamburgerMenuItem;

  render() {
    return (
      <HamburgerMenuStyled>
        <HamburgerMenuHeaderStyled>
          <HamburgerMenuDismissButtonStyled onClick={this.props.onClick}/>
        </HamburgerMenuHeaderStyled>
        {this.props.children}
      </HamburgerMenuStyled>
    );
  }
}

import * as React from 'react';

import {
  DrawerMenuStyled,
  DrawerOverlayStyled,
  DrawerStyled,
} from './drawer.component.style';

export interface DrawerProps {
  active?: boolean;
  onClick?: () => void;
}

export class Drawer extends React.Component<DrawerProps, any> {
  render() {
    return (
      <DrawerStyled
        active={this.props.active}
      >
        <DrawerMenuStyled
          active={this.props.active}
        >
          {this.props.children}
        </DrawerMenuStyled>
        <DrawerOverlayStyled
          active={this.props.active}
          onClick={this.props.onClick}
        />
      </DrawerStyled>
    );
  }
}

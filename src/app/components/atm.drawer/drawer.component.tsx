import * as React from 'react';

import { DrawerStyled } from './drawer.component.style';

export interface DrawerProps {
  active?: boolean;
  onClick?: () => void;
}

export class Drawer extends React.Component<DrawerProps, any> {
  render() {
    return (
      <DrawerStyled active={this.props.active}>
        {this.props.children}
      </DrawerStyled>
    );
  }
}

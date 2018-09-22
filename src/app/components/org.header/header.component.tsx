import * as React from 'react';
import { HeaderPlaceholderStyled, HeaderStyled } from './header.component.style';
import { HamburgerButton } from '../atm.hamburger-button';
import { Hbox } from '../obj.box';
import { H3 } from '../atm.typography';
import { Drawer } from '../atm.drawer';
import { HamburgerMenu } from '../mol.hamburger-menu';

// tslint:disable-next-line:no-empty-interface
export interface HeaderProps {
}

export interface HeaderState {
  menuOpened: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      menuOpened: false,
    };
  }

  render() {
    return (
      <>
        <HeaderStyled>
          <Hbox grow={true}>
            <Hbox.Item hAlign='flex-start' vAlign='center'>
              <H3>Jusarang</H3>
            </Hbox.Item>
            <Hbox.Item hAlign='flex-end' vAlign='center'>
              <HamburgerButton onClick={this.handleButtonClick} active={this.state.menuOpened}/>
              <Drawer active={this.state.menuOpened} onClick={this.handleButtonClick}>
                <HamburgerMenu onClick={this.handleButtonClick}>
                  <HamburgerMenu.Item to='/' onClick={this.handleButtonClick}>
                    Home
                  </HamburgerMenu.Item>
                </HamburgerMenu>
              </Drawer>
            </Hbox.Item>
          </Hbox>
        </HeaderStyled>
        <HeaderPlaceholderStyled/>
      </>
    );
  }

  private handleButtonClick = () => {
    this.setState({ menuOpened: !this.state.menuOpened });
  }
}

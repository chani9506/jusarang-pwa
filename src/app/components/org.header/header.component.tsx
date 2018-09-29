import * as React from 'react';
import {
  FixedHeaderStyled, HeaderPlaceholderStyled,
  HeaderStyled, HeaderTitleWrapperStyled,
} from './header.component.style';
import { HamburgerButton } from '../atm.hamburger-button';
import { Drawer } from '../atm.drawer';
import { HamburgerMenu } from '../mol.hamburger-menu';
import { FaIcon } from '@app/components/atm.fa-icon';
import { HDisplay } from '@app/components/atm.typography';

// tslint:disable-next-line:no-empty-interface
export interface HeaderProps {
  onClick: (menuOpened: boolean) => void;
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
          <HeaderTitleWrapperStyled menuOpened={this.state.menuOpened}>
            <HDisplay>J<FaIcon.Heart/></HDisplay>
          </HeaderTitleWrapperStyled>
          <FixedHeaderStyled>
            <HamburgerButton onClick={this.handleButtonClick} active={this.state.menuOpened}/>
            <Drawer active={this.state.menuOpened} onClick={this.handleButtonClick}>
              <HamburgerMenu active={this.state.menuOpened} onClick={this.handleButtonClick}/>
            </Drawer>
          </FixedHeaderStyled>
          <HeaderPlaceholderStyled/>
        </HeaderStyled>
      </>
    );
  }

  private handleButtonClick = () => {
    this.props.onClick(!this.state.menuOpened);
    this.setState({ menuOpened: !this.state.menuOpened });
  }
}

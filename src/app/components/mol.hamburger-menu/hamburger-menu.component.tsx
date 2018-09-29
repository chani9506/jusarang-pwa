import * as React from 'react';

import {
  HamburgerInnerMenuContent,
  HamburgerInnerMenuStyled,
  HamburgerMenuContentStyled,
  HamburgerMenuHeaderStyled,
  HamburgerMenuItemStyled,
  HamburgerMenuLabelStyled,
  HamburgerMenuStyled,
  HamburgerMenuUnderlineStyled,
} from './hamburger-menu.component.style';

export interface HamburgerMenuProps {
  onClick: () => void;
  active: boolean;
}

export interface HamburgerMenuState {
  selected: 'profile' | 'feed';
}

export class HamburgerMenu extends React.Component<HamburgerMenuProps, HamburgerMenuState> {
  constructor(
    props: HamburgerMenuProps,
  ) {
    super(props);
    this.state = {
      selected: 'profile',
    };
  }

  render() {
    return (
      <>
        <HamburgerMenuStyled active={this.props.active}>
          <HamburgerMenuContentStyled>
            <HamburgerMenuHeaderStyled/>
          </HamburgerMenuContentStyled>
        </HamburgerMenuStyled>
        <HamburgerInnerMenuStyled active={this.props.active}>
          <HamburgerInnerMenuContent active={this.props.active}>
            <HamburgerMenuItemStyled onClick={this.handleProfileClick}>
              <HamburgerMenuLabelStyled>My Profile</HamburgerMenuLabelStyled>
              <HamburgerMenuUnderlineStyled selected={this.state.selected === 'profile'}/>
            </HamburgerMenuItemStyled>
            <HamburgerMenuItemStyled onClick={this.handleFeedClick}>
              <HamburgerMenuLabelStyled>News Feed</HamburgerMenuLabelStyled>
              <HamburgerMenuUnderlineStyled selected={this.state.selected === 'feed'}/>
            </HamburgerMenuItemStyled>
          </HamburgerInnerMenuContent>
        </HamburgerInnerMenuStyled>
      </>
    );
  }

  private handleProfileClick = () => {
    this.setState({ selected: 'profile' });
  }

  private handleFeedClick = () => {
    this.setState({ selected: 'feed' });
  }
}

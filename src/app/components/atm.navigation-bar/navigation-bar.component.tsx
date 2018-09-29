import * as React from 'react';
import {
  NavigationBarItemStyled, NavigationBarLabelStyled, NavigationBarStyled,
} from './navigation-bar.component.style';

export class NavigationBar extends React.Component<any, any> {
  render() {
    return (
      <NavigationBarStyled>
        <NavigationBarItemStyled to='/'>
          <NavigationBarLabelStyled>Farm</NavigationBarLabelStyled>
        </NavigationBarItemStyled>
      </NavigationBarStyled>
    );
  }
}

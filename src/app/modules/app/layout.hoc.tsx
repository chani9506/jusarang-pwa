import * as React from 'react';
import { Header } from '@app/components/org.header/header.component';
import { NavigationBar } from '@app/components/atm.navigation-bar';
import { ScrollBox } from './obj.scroll-box';
import { Subscribe } from 'unstated';
import { ScrollDisablerProvider } from '@app/providers';

export const withLayout = Component => {
  return class Layout extends React.Component<any, any> {
    render() {
      return (
        <Subscribe to={[ScrollDisablerProvider]}>
          {(scrollDisabler: ScrollDisablerProvider) =>
            <ScrollBox disableScroll={scrollDisabler.state.disabled}>
              <Header onClick={scrollDisabler.setScrollStatus}/>
              <NavigationBar/>
              <Component {...this.props}/>
            </ScrollBox>
          }
        </Subscribe>
      );
    }
  };
};

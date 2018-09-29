import * as React from 'react';
import { ScrollBoxStyled } from './scroll-box.component.style';
import { ClearUpdate } from './clear-update.component';

export interface ScrollBoxProps {
  disableScroll: boolean;
}

export interface ScrollBoxState {
  offset: number;
}

export class ScrollBox extends React.PureComponent<ScrollBoxProps, ScrollBoxState> {
  constructor(props: ScrollBoxProps) {
    super(props);
    this.state = {
      offset: 0,
    };
  }

  getSnapshotBeforeUpdate(prevProps: ScrollBoxProps) {
    if (this.props.disableScroll !== prevProps.disableScroll && this.props.disableScroll && window !== undefined) {
      return window.scrollY;
    }
    return null;
  }

  componentDidUpdate(prevProps: ScrollBoxProps, _prevState, snapshot) {
    if (this.props.disableScroll !== prevProps.disableScroll && !this.props.disableScroll && window !== undefined) {
      window.scrollTo(0, this.state.offset);
      this.setState({ offset: 0 });
    } else if (snapshot) {
      this.setState({ offset: snapshot });
    }
  }

  render() {
    return (
      <ScrollBoxStyled disableScroll={this.props.disableScroll} offset={this.state.offset}>
        <ClearUpdate>
          {this.props.children}
        </ClearUpdate>
      </ScrollBoxStyled>
    );
  }
}

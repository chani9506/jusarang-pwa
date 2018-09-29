import { Container } from 'unstated';

export interface ScrollDisablerProviderState {
  disabled: boolean;
}

export class ScrollDisablerProvider extends Container<ScrollDisablerProviderState> {
  constructor() {
    super();
    this.state = {
      disabled: false,
    };
  }

  setScrollStatus = (disabled: boolean) => {
    this.setState({ disabled });
  }
}

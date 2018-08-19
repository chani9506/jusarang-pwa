import * as React from 'react';
import { ButtonStyled, LinkButtonStyled } from './button.component.style';

export type ButtonType = 'primary' | 'secondary' | 'callToAction' | 'link' | 'alert';

export interface ButtonProps {
  onClick?: () => void;
  btnkind: ButtonType;
  outlined?: boolean;
  to?: string | object;
}

export class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    btnkind: 'primary',
    outlined: false,
  };

  render() {
    return (
      <>
        {this.props.to ? (
          <LinkButtonStyled
            to={this.props.to}
            {...this.props}
          >
            {this.props.children}
          </LinkButtonStyled>
        ) : (
          <ButtonStyled
           {...this.props}
          >
            {this.props.children}
          </ButtonStyled>
        )}
      </>
    );
  }
}

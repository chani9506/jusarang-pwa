import styled, { css } from 'styled-components';
import { Color, FontFamily, FontSize, FontWeight, Spacing } from '../obj.constants';
import { ButtonProps } from './button.component';
import * as ColorFunc from 'color';
import { Link } from '@app/core/router/link.component';

const buttonColors = {
  primary: Color.Primary,
  secondary: Color.GrayLight,
  callToAction: Color.Secondary,
  alert: Color.Secondary,
  link: 'transparent',
};

const labelColors = {
  primary: Color.Black,
  secondary: Color.White,
  callToAction: Color.White,
  alert: Color.Black,
  link: Color.Black,
};

const ButtonStyledCss = css`
  position: relative;
  min-height: 40px;
  background-color: ${(props: ButtonProps) => props.outlined ?
    'transparent' : buttonColors[props.btnkind]};
  padding: ${Spacing.Small} ${Spacing.Medium};
  border: 1px solid ${(props: ButtonProps) => props.outlined ?
    labelColors[props.btnkind] : buttonColors[props.btnkind]};
  border-radius: 4px;
  border-color: ${(props: ButtonProps) => !props.outlined ? 'transparent' : buttonColors[props.btnkind]};
  color: ${(props: ButtonProps) => props.outlined && props.btnkind !== 'link' ?
    buttonColors[props.btnkind] : labelColors[props.btnkind]};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Bold};
  text-transform: uppercase;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0.05);

  & > .fa {
    margin-right: ${Spacing.XSmall};
  }
`;

export const ButtonStyled = styled.button`
  ${ButtonStyledCss}
  :focus {
    outline: 0;
  }
  :active {
    background-color: ${(props: ButtonProps) =>
      props.btnkind === 'link' || props.outlined  ?
        'transparent' : ColorFunc(buttonColors[props.btnkind]).darken(0.2).hsl().string() };
    border-color: ${(props: ButtonProps) =>
      props.btnkind === 'link' || props.outlined ?
        'transparent' : ColorFunc(buttonColors[props.btnkind]).darken(0.2).hsl().string() };
  }
`;

export const LinkButtonStyled = styled(Link)`
  ${ButtonStyledCss}
  display: inline-block;
  text-decoration: none;
  text-align: center;
`;

import { Color, FontFamily, FontSize, FontWeight, Spacing } from '../obj.constants';
import styled from 'styled-components';

interface HamburgerMenuStyledProps {
  active: boolean;
}

export const HamburgerMenuItemStyled = styled.div`
  margin-bottom: ${Spacing.Medium};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

interface HamburgerMenuUnderlineStyledProps {
  selected: boolean;
}

export const HamburgerMenuUnderlineStyled = styled.div`
  background-color: ${Color.Black};
  height: 3px;
  border-radius: 3px;
  width: ${(props: HamburgerMenuUnderlineStyledProps) => props.selected ? '100%' : '0%'};
  margin-top: 2px;
  transition: ${(props: HamburgerMenuUnderlineStyledProps) => props.selected ? 'width .5s' : ''};
`;

export const HamburgerMenuLabelStyled = styled.label`
  pointer-events: none;
  color: ${Color.Black};
  font-size: ${FontSize.Medium};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Normal};
`;

export const HamburgerMenuContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${Spacing.Medium};
  height: 100%;
`;

export const HamburgerMenuHeaderStyled = styled.div`
  margin-top: ${Spacing.Large};
  margin-bottom: 60px;
`;

export const HamburgerMenuStyled = styled.div`
  position: absolute;
  background-color: ${Color.Black};
  width: 55%;
  height: 100%;
  right: ${(props: HamburgerMenuStyledProps) => (props.active) ? 0 : '-85%'};
  top: 0;
  transition: ${(props: HamburgerMenuStyledProps) => (props.active) ? 'right .3s' : 'right .3s, z-index .3s .3s'};
  z-index: ${(props: HamburgerMenuStyledProps) => (props.active) ? '2' : '-2'};
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  overscroll-behavior: contain;
`;

export const HamburgerInnerMenuStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  padding-left: ${Spacing.Medium};
  background-color: ${Color.White};
  opacity: ${(props: HamburgerMenuStyledProps) => (props.active) ? '1' : '0'};
  z-index: ${(props: HamburgerMenuStyledProps) => (props.active) ? '1' : '-1'};
  pointer-events: ${(props: HamburgerMenuStyledProps) => (props.active) ? '0' : 'none'};
  transition: ${(props: HamburgerMenuStyledProps) => (props.active) ? ''
    : 'z-index .3s .3s'};
`;

export const HamburgerInnerMenuContent = styled.div`
  position: relative;
  top: 40%;
  left: ${(props: HamburgerMenuStyledProps) => (props.active) ? '0%' : '50%'};
  opacity: ${(props: HamburgerMenuStyledProps) => (props.active) ? '1' : '0'};
  transition: ${(props: HamburgerMenuStyledProps) => (props.active) ? 'opacity .3s .3s, left .4s .2s' : ''};
`;

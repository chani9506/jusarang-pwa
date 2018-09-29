import styled from 'styled-components';
import { Color, Spacing } from '../obj.constants';

interface HeaderStyledProps {
  menuOpened: boolean;
}

const headerHeight = 200;
export const fixedHeaderHeight = 50;

export const HeaderStyled = styled.div`
  display: flex;
  box-shadow: 0 0.5px 0 0 ${Color.White};
  width: 100%;
  height: ${headerHeight}px;
  z-index: 100;
  flex-direction: column;
`;

export const FixedHeaderStyled = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0px;
  width: 100%;
  height: ${fixedHeaderHeight}px;
  padding: 0 ${Spacing.Medium};
  background: ${Color.White};
  z-index: 99;
`;

export const HeaderTitleWrapperStyled = styled.div`
  position: absolute;
  top: 10px;
  left: 16px;
  z-index: ${(props: HeaderStyledProps) => props.menuOpened ? 0 : 100};
`;

export const HeaderPlaceholderStyled = styled.div`
  width: 100%;
  height: ${headerHeight}px;
`;

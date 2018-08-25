import styled from 'styled-components';
import { Color, Spacing } from '../obj.constants';

const headerHeight = 56;

export const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.Surface};
  box-shadow: 0 0.5px 0 0 ${Color.GrayDark};
  width: 100%;
  height: ${headerHeight}px;
  padding: 0 ${Spacing.Medium};
  z-index: 100;
`;

export const HeaderPlaceholderStyled = styled.div`
  height: ${headerHeight}px;
`;

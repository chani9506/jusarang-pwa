import styled from 'styled-components';

interface ScrollBoxStyledProps {
  disableScroll: boolean;
  offset: number;
}

export const ScrollBoxStyled = styled.div`
  position: ${(props: ScrollBoxStyledProps) => props.disableScroll ? 'fixed' : 'static'};
  overflow: ${(props: ScrollBoxStyledProps) => props.disableScroll ? 'hidden' : 'visible'};
  ${(props: ScrollBoxStyledProps) => props.disableScroll ? `top: -${props.offset}px` : ''};
  width: 100%;
  min-height: 100%;
`;

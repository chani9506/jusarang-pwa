import { Grid as FlexGrid, Row as FlexRow } from 'react-styled-flexboxgrid';
import { Color, Spacing } from '../obj.constants';
import styled, { StyledFunction } from 'styled-components';

export { Col } from 'react-styled-flexboxgrid';

interface GridProps {
  fluid?: boolean;
  bgColor?: boolean;
}

export interface RowProps {
  mb?: boolean;
  noGutter?: boolean;
}

const grid: StyledFunction<GridProps> = styled(FlexGrid).attrs({fluid: true});

export const Grid = grid`
  overflow: hidden;
  background-color: ${(props: GridProps) => props.bgColor ? Color.Surface : 'transparent'};
`;

export const Row = styled(FlexRow)`
  margin-bottom: ${(props: RowProps) => props.mb ? Spacing.Medium : '0px' };
  ${(props: RowProps) => {
    if (props.noGutter) {
      return `overflow: hidden;
              margin-left: -${rowMargin}rem;
              margin-right: -${rowMargin}rem;`;
    } else {
      return '';
    }
  }}
`;

export const GridConfig = {
  flexboxgrid: {
    gridSize: 12,
    // Defaults
    gutterWidth: 0.5, // rem
    outerMargin: 1, // rem
    breakpoints: {
      xs: 0,  // em
      sm: 32, // em
      md: 48, // em
      lg: 64, // em
    },
  },
};

export const rowMargin = GridConfig.flexboxgrid.outerMargin + GridConfig.flexboxgrid.gutterWidth / 2;

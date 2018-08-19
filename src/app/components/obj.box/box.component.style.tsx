import styled from 'styled-components';
import { Spacing } from '../obj.constants';

interface BoxProps {
  // src: https://www.w3schools.com/cssref/css3_pr_align-items.asp
  hAlign?: 'stretch'| 'center'| 'flex-start'| 'flex-end'| 'baseline'| 'initial'| 'inherit';
  // src: https://www.w3schools.com/cssref/css3_pr_justify-content.asp
  vAlign?: 'flex-start'| 'flex-end'| 'center'| 'space-between'| 'space-around'| 'initial'| 'inherit';
}

export interface HboxProps extends BoxProps {
  grow?: boolean;
}

export interface HboxItemProps extends BoxProps {
  noGrow?: boolean;
}

const HboxStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  ${(props: HboxProps) => props.grow ? 'flex: 1' : null };
`;

export const Hbox: any = HboxStyled;
Hbox.displayName = 'Hbox';

Hbox.Item = styled.div`
  flex-direction: column;
  display: flex;
  ${(props: HboxItemProps) => !props.noGrow ? 'flex: 1' : null };
  justify-content: ${(props: HboxItemProps) => props.vAlign ? props.vAlign : 'flex-start'};
  align-items: ${(props: HboxItemProps) => props.hAlign ? props.hAlign : 'stretch'};
`;
Hbox.Item.displayName = 'Hbox.Item';

Hbox.Separator = styled.div`
  width: ${Spacing.Small};
`;
Hbox.Separator.displayName = 'Hbox.Separator';

export const Separator = styled.div`
  margin-bottom: ${Spacing.Large};
`;

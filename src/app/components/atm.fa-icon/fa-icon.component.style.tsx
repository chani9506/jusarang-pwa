import styled from 'styled-components';
import { Icon } from 'react-fa';
import { Color, IconSize } from '../obj.constants';

export const FaIconStyled = styled(Icon)`
  color: ${Color.GrayLight};
  font-size: ${IconSize.Medium} !important;
  vertical-align: middle;
`;

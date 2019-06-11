import { getCssClass } from '@design-system/infrastructure/utils';
import { styled } from '../../models';
import { mixFlexbox } from './mixins';
import { IBoxProps } from './models';

export const Box = styled('div').attrs(({ className }) => ({
  className: getCssClass('ego-Box', className),
}))<IBoxProps>`
  ${props => `
    display: ${props.flex ? 'flex' : ''};
    ${mixFlexbox(props)}
  `}
`;

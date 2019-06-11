import { getCssClass } from '@design-system/infrastructure/utils';
import { styled } from '../../models';
import { mixFlexbox } from './mixins';
import { IFlexProps } from './models';

export const Flex = styled('div').attrs(({ className }) => ({
  className: getCssClass('ego-Flex', className),
}))<IFlexProps>`
  ${props => `
    display: flex;
    ${mixFlexbox(props)}
  `}
`;

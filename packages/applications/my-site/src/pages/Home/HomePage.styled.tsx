import { getCssClass } from '@design-system/infrastructure/utils';
import { styled } from '../../models';
import { IHomePageProps } from './models';
import { HomePage as OriginHomePage } from './HomePage';

export default styled(OriginHomePage).attrs(({ className }) => ({
  className: getCssClass('ego-HomePage', className),
}))<IHomePageProps>`
  ${props => {
    const { space, breakpoint } = props.theme;

    return `
      & {
        max-width: calc(${breakpoint[1024]} - ${space.m});
        width: 100%;
        padding: ${space.m};
      }
    `;
  }}
`;

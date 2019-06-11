import { getCssClass } from '@design-system/infrastructure/utils';
import { styled } from '../../models';
import { IProductPageProps } from './models';
import { ProductPage as OriginProductPage } from './ProductPage';

export default styled(OriginProductPage).attrs(({ className }) => ({
  className: getCssClass('ego-ProductPage', className),
}))<IProductPageProps>`
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

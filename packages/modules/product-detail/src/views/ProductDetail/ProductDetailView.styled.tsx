import { getCssClass } from '@design-system/infrastructure/utils';
import { styled } from '../../models';
import { IProductDetailViewProps } from './models';
import { ProductDetailView as OriginProductDetailView } from './ProductDetailView';

export const ProductDetailView = styled(OriginProductDetailView).attrs(
  ({ className }) => ({
    className: getCssClass('ego-ProductDetailView', className),
  })
)<IProductDetailViewProps>`
  ${props => {
    const { space } = props.theme;

    return `
      & {
        padding: ${space.m};
      }
    `;
  }}
`;

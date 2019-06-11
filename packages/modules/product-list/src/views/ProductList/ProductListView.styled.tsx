import { getCssClass } from '@design-system/infrastructure/utils';
import { styled } from '../../models';
import { IProductListViewProps, IProductListViewTheme } from './models';
import { ProductListView as OriginProductListView } from './ProductListView';

export const ProductListView = styled(OriginProductListView).attrs(
  ({ className }) => ({
    className: getCssClass('ego-ProductListView', className),
  })
)<IProductListViewProps>`
  ${props => {
    const {
      theme: { space },
    } = props;
    const { item } = props.theme.views.productList as IProductListViewTheme;

    return `
      & {
        > .ego-ProductListItem {
          padding: ${space.m} ${space.s};
          background-color: ${item.background.default};

          &:hover {
            background-color: ${item.background.hover};
          }

          + .ego-ProductListItem {
            border-top: 1px solid ${item.border.default};
          }
        }
      }
    `;
  }}
`;

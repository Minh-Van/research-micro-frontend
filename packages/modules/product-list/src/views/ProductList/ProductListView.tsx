import React from 'react';
import { padNumber } from '@design-system/infrastructure/utils';
import { Flex, Box } from '@design-system/core/components';
import { IProductListViewProps } from './models';
import { withTheme } from '../../models';

class OriginProductListView extends React.PureComponent<IProductListViewProps> {
  _products: Array<{ id: number; name: string; description: string }> = [];

  constructor(props: IProductListViewProps) {
    super(props);

    for (let i = 1; i <= 10; i++) {
      this._products.push({
        id: i,
        name: `Product ${padNumber(i, 2)}`,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor magna, convallis ut risus dignissim, varius tristique odio. In aliquet semper tellus sed elementum. Aenean vitae sem non est tincidunt lobortis. Mauris pharetra, metus ac aliquet pretium, felis felis convallis elit, ut pharetra orci lorem ut enim',
      });
    }
  }

  render() {
    const {
      className,
      theme: { space },
    } = this.props;

    return (
      <div className={className}>
        {this._products.map(item => (
          <Flex className="ego-ProductListItem" key={item.id}>
            <Box grow={1} basis={0} mr={space.m}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </Box>
            <Box alignSelf="center">
              <a href="#" onClick={event => this.viewDetail(event, item.id)}>
                View detail
              </a>
            </Box>
          </Flex>
        ))}
      </div>
    );
  }

  viewDetail = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number
  ): void => {
    event.preventDefault();
    event.stopPropagation();

    const { onViewDetail } = this.props;

    if (onViewDetail) {
      onViewDetail(id);
    }
  };
}

export const ProductListView = withTheme(OriginProductListView);

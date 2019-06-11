import React from 'react';
import { Link } from 'react-router-dom';
import { MicroProductDetailModule } from '../../models';
import { IProductPageProps } from './models';

export class ProductPage extends React.PureComponent<IProductPageProps> {
  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <h2>Product Page</h2>
        <div>
          <Link to="/">Home</Link> &gt; Product
        </div>
        <MicroProductDetailModule />
      </div>
    );
  }
}

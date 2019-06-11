import React from 'react';
import { withRouter } from 'react-router-dom';
import { MicroProductListModule } from '../../models';
import { IHomePageProps } from './models';

class OriginHomePage extends React.PureComponent<IHomePageProps> {
  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <h2>Home Page</h2>
        <MicroProductListModule onViewDetail={this.viewDetail} />
      </div>
    );
  }

  viewDetail = (id: number): void => {
    this.props.history.push(`/product/${id}`);
  };
}

export const HomePage = withRouter(OriginHomePage);

import React from 'react';
import { IProductDetailViewProps } from './models';

export class ProductDetailView extends React.PureComponent<
  IProductDetailViewProps
> {
  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          maximus aliquet porta. Quisque tempor fermentum accumsan. Nunc
          volutpat id velit malesuada lobortis. Fusce pulvinar dignissim lectus
          sit amet facilisis. Fusce ac fermentum sapien. Nunc feugiat tellus
          leo. Sed dictum ut tellus ac consequat. Suspendisse non ullamcorper
          ante. Nulla facilisi. Curabitur finibus ante a ante pretium, ut
          feugiat ante venenatis. Nunc in scelerisque tortor, et posuere mi.
          Quisque mollis mattis elementum.
        </p>
        <br />
        <p>
          Aliquam erat volutpat. Donec enim nisi, aliquet vitae ante in, varius
          pellentesque eros. Vestibulum sodales ultricies turpis a pharetra.
          Etiam eget euismod risus, sit amet hendrerit quam. Nam sed nibh lacus.
          Donec pharetra eu eros in finibus. In et laoreet tellus, in gravida
          urna. Aenean elementum lobortis diam. Fusce auctor, leo quis convallis
          mollis, odio ligula pellentesque orci, efficitur sagittis nulla mauris
          et quam. Mauris et augue in tellus convallis convallis in et diam.
          Phasellus quis suscipit sem. Vivamus vitae lorem ut dui lobortis
          tristique. Quisque sollicitudin nunc vel quam mollis blandit.
        </p>
        <br />
        <p>
          Morbi eget eros sit amet nunc lacinia fermentum eu ut eros. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit,
          massa quis gravida blandit, lacus massa fermentum neque, et consequat
          leo tellus sit amet turpis. Suspendisse faucibus tristique sagittis.
          Ut in augue accumsan, maximus nisi eu, porttitor quam. Fusce tristique
          purus purus, nec pretium purus rhoncus a. Etiam volutpat in velit ut
          ornare. In ut dolor purus. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Integer nulla
          velit, varius eu fringilla sagittis, pulvinar sed turpis. Quisque eget
          malesuada ipsum. Duis nulla enim, maximus at aliquam et, facilisis
          vitae orci. Fusce ut scelerisque eros.
        </p>
      </div>
    );
  }
}

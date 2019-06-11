import React from 'react';
import axios from 'axios';
import { IMySiteAppTheme, withTheme } from './theme';

const assetCache = new Map<string, Promise<any>>();

const MicroProductListModule = withTheme(
  getMicroModule<{
    theme?: IMySiteAppTheme;
    onViewDetail?: (id: number) => void;
  }>('http://localhost:12001', 'ProductListModule')
);
const MicroProductDetailModule = withTheme(
  getMicroModule<{
    theme?: IMySiteAppTheme;
  }>('http://localhost:12002', 'ProductDetailModule')
);

export { MicroProductListModule, MicroProductDetailModule };

function getMicroModule<TProps extends { theme?: IMySiteAppTheme }>(
  url: string,
  name: string
): React.ComponentClass<TProps> {
  class MicroModule extends React.PureComponent<
    TProps,
    { microModule?: React.ReactElement }
  > {
    state = {
      microModule: undefined,
    };

    componentDidMount() {
      axios.get(`${url}/api/assets`).then(({ data }) => {
        if (data.js) {
          loadScript(`${url}/${data.js}`, name).then(amdModule => {
            this.setState({ microModule: amdModule[name] });
          });
        }
        if (data.css) {
          loadStyle(`${url}/${data.css}`);
        }
      });
    }
    render() {
      const { microModule } = this.state;
      return microModule ? React.createElement(microModule, this.props) : null;
    }
  }

  return MicroModule;
}

function loadScript(url: string, name: string): Promise<any> {
  let promise;

  if (assetCache.has(url)) {
    promise = assetCache.get(url);
  } else {
    promise = new Promise((resolve, reject) => {
      let script = document.createElement('script');
      script.onerror = () => reject(new Error(`Failed to load '${url}'`));
      script.onload = resolve;
      script.async = true;
      script.src = url;

      if (document.currentScript && document.currentScript.parentNode) {
        document.currentScript.parentNode.insertBefore(
          script,
          document.currentScript
        );
      } else {
        (document.body || document.getElementsByTagName('body')[0]).appendChild(
          script
        );
      }
    });

    assetCache.set(url, promise);
  }

  return promise.then(() => {
    if (global[name]) {
      return global[name];
    } else {
      throw new Error(`"${name}" was not created by "${url}"`);
    }
  });
}

function loadStyle(url: string): Promise<any> {
  let promise;

  if (assetCache.has(url)) {
    promise = assetCache.get(url);
  } else {
    promise = new Promise((resolve, reject) => {
      let link = document.createElement('link');
      link.onerror = () => reject(new Error(`Failed to load '${url}'`));
      link.onload = resolve;
      link.href = url;
      link.rel = 'stylesheet';
      (document.head || document.getElementsByTagName('head')[0]).appendChild(
        link
      );
    });

    assetCache.set(url, promise);
  }

  return promise;
}

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ThemeProvider as DefaultThemeProvider,
  GlobalStyle,
  getAllComponentTheme,
} from '@design-system/themes/built-in/default';
import { ThemeProvider, theme, getAllViewTheme } from './models';
import { HomePage } from './pages/Home';

theme.setComponentTheme(getAllComponentTheme);
theme.setViewTheme(getAllViewTheme);

const LazyProductPage = lazyComponent(
  import('./pages/Product/ProductPage.styled')
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <DefaultThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product/:id" component={LazyProductPage} />
          </Switch>
        </Router>
      </>
    </DefaultThemeProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

function lazyComponent(
  dynamicImport: Promise<{ default: React.ComponentType<any> }>
): React.FunctionComponent {
  const Component = React.lazy(() => dynamicImport);
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

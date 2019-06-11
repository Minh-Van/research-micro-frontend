import React from 'react';
import ReactDOM from 'react-dom';
import {
  ThemeProvider as DefaultThemeProvider,
  GlobalStyle,
  getAllComponentTheme,
} from '@design-system/themes/built-in/default';
import { ThemeProvider, theme } from './models';
import { ProductDetailView } from './views';

theme.setComponentTheme(getAllComponentTheme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <DefaultThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ProductDetailView />
      </>
    </DefaultThemeProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

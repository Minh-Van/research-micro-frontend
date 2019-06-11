import React from 'react';
import ReactDOM from 'react-dom';
import {
  ThemeProvider as DefaultThemeProvider,
  GlobalStyle,
  getAllComponentTheme,
} from '@design-system/themes/built-in/default';
import { ThemeProvider, theme, getAllViewTheme } from './models';
import { ProductListView } from './views';

theme.setComponentTheme(getAllComponentTheme);
theme.setViewTheme(getAllViewTheme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <DefaultThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ProductListView />
      </>
    </DefaultThemeProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

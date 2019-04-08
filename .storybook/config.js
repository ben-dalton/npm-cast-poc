import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import store from '../src/utils/configureStore';
import { ThemeProvider, Themes } from '@tkxs/cast-ui/lib-es2015/themes';
import { Provider } from 'react-redux';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'POC',
      brandUrl: 'https://github.com/technekes/',
      brandImage: 'https://cdn2.hubspot.net/hubfs/1976913/tkxs-logo.png',
    }),
    isFullscreen: false,
    panelPosition: 'right',
  },
});
addDecorator(
  withInfo({
    inline: true,
    source: true,
  }),
);

addDecorator(story => (
  <Provider store={store}>
    <ThemeProvider theme={Themes.cobaltTheme}>{story()}</ThemeProvider>
  </Provider>
));

addDecorator(withKnobs);

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  require('./poc');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

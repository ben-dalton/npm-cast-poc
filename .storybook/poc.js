import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('POC', module).add('TKXS POC', () => <div />, {
  info: {
    inline: true,
    source: false,
    text: `
      ### Description
      This is proof of concept project maintained by [TKXS](https://www.tkxs.com).
    `,
  },
});

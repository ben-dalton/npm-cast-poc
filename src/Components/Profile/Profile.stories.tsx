import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Profile from './Profile.component';

storiesOf('Profile', module).add('Profile', () => <Profile />, {
  info: {
    text: `
        ### Notes

        This is a Profile

        `,
  },
});

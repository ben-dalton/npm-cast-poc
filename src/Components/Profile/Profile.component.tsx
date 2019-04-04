import * as React from 'react';
import { Alert } from '@tkxs/cast-ui/lib-esm';

export type Props = {
  /**
   * Entity
   *
   * @default null
   **/
  entity?: any;
};

const Profile: React.FunctionComponent<Props> = ({ entity, ...props }) => (
  <Alert alertStyle="primary" {...props}>
    This is the profile of {entity.name}.
  </Alert>
);

Profile.defaultProps = {
  entity: {
    name: 'D. Fault',
  },
};

export default Profile;

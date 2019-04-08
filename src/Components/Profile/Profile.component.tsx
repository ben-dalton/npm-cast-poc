import * as React from 'react';
import { connect } from 'react-redux';
import { Table } from '@tkxs/cast-ui/lib-esm';
import * as actions from '../../actions/profileActions';

const columns = [
  {
    Header: 'Company',
    accessor: 'company.name',
  },
  {
    Header: 'Contact',
    accessor: 'name',
  },
];

export type Props = {
  /**
   * Entity
   *
   * @default null
   **/
  users?: any[];
  entity?: any;
  initializeProfile: () => void;
  initialized?: boolean;
};

class Profile extends React.Component<Props> {
  componentDidMount() {
    this.props.initializeProfile();
  }
  render() {
    return <Table columns={columns} data={this.props.users} />;
  }
  static defaultProps = {
    entity: {
      name: 'default within component',
    },
  };
}

const mapStateToProps = (state: any) => {
  const { profile } = state;
  return {
    users: profile.users,
    error: profile.error,
    async: profile.async,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(Profile);

import React from 'react';
import UserIndex from '../components/users/UserIndex';
import UserEdit from '../components/users/UserEdit';
import UserCreateContainer from './UserCreateContainer';

export default class MainContainer extends React.Component {
  render() {
    const {
      users,
      onFilterTextChange
    } = this.props;

    return (<UserIndex users={users} filterText="" onFilterTextChange={onFilterTextChange}/>);
}
}

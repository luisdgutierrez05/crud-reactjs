import React from 'react';
import UserIndex from '../components/users/UserIndex';
import UserEdit from '../components/users/UserEdit';
import UserCreateContainer from './UserCreateContainer';

export default class MainContainer extends React.Component {
  state = {
    currentViewMode: 'index',
    userId: null,
    filterText: "",
    users: [{
      id:1,
      email: 'test@test.com',
      firstName: 'test',
      lastName: 'last',
      birthDate: '10-10-2017'
    },{
      id:2,
      email: 'lg@test.com',
      firstName: 'luis',
      lastName: 'gutierrez',
      birthDate: '04-03-1989'
    },{
      id:3,
      email: 'dm@test.com',
      firstName: 'david',
      lastName: 'molina',
      birthDate: '01-01-1980'
    }]
  }

  handleViewMode = (mode, userId) => {
    this.setState({ currentViewMode: mode });

    if(userId !== undefined) {
      this.setState({ userId: userId });
    }
  }

  updateFilterTextChange = (filterText) => {
    this.setState({ filterText: filterText });
  }

  handleCreateUser = (user) => {
    var index = this.state.users.length;
    user["id"] = (user["id"] == "") ? (index + 1) : (parseInt(user["id"]) + 1);
    this.state.users.push(user);
    this.setState({users: this.state.users});
  }

  handleEditUser = (userId) => {
    console.log("edit")
  }

  handleDeleteUser = (userId) => {
    var temp = this.state.users;
    this.setState({ users : temp.filter( (newInfo, i) =>
      (i !==  userId)
    )});
  }

  render() {
    const {
      currentViewMode,
      userId,
      users,
      filterText,
      isDirty,
    } = this.state;

    switch(currentViewMode) {
      case "create":
        return <UserCreateContainer
                users={users}
                onChangeViewMode={this.handleViewMode}
                onCreateUser={this.handleCreateUser}
              />;
      case "edit":
        return <EditUser
                userId={userId}
                onChangeViewMode={this.handleViewMode}
              />;
      default:
        return <UserIndex
                users={users}
                filterText={filterText}
                onFilterTextChange={this.updateFilterTextChange}
                onChangeViewMode={this.handleViewMode}
                onEditUser={this.handleEditUser}
                onDeleteUser={this.handleDeleteUser}
              />;
    }
  }
}

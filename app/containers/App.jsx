import React from 'react';
import MainContainer from 'containers/MainContainer';
import AboutUs from 'components/AboutUs';
import UserCreateContainer from 'containers/UserCreateContainer';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from "history";

export default class App extends React.Component {
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

  handleCreateUser = (user, history) => {
    var index = this.state.users.length;
    user["id"] = (user["id"] == "") ? (index + 1) : (parseInt(user["id"]) + 1);
    this.state.users.push(user);
    this.setState({users: this.state.users});
    history.push('/');
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

    return (<Switch>
      <Route exact path="/"
        render={ props => <MainContainer {...props} users={users} filterText={filterText} onFilterTextChange={this.updateFilterTextChange}/>}
      />
      <Route path="/about" component={AboutUs}/>
      <Route path="/users/new"
        render={ props => <UserCreateContainer {...props} users={users} onCreateUser={this.handleCreateUser} />}
      />
    </Switch>);
  }
}

import React from 'react';
import UserForm from '../components/users/UserForm';

export default class UserCreateContainer extends React.Component {
  state = {
    id:        "",
    email:     "",
    firstName: "",
    lastName:  "",
    birthDate: ""
  }

  handleUserChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleUserSubmit = (event) => {
    event.preventDefault();

    this.props.onCreateUser(this.state, this.props.history);
    this.clearForm();
  }

  clearForm() {
    this.setState({
      email: "",
      firstName: "",
      lastName: "",
      birthDate: ""
    })
  }

  render() {
    const {email, firstName, lastName, birthDate} = this.state;

    return(
      <UserForm
        email={email}
        firstName={firstName}
        lastName={lastName}
        birthDate={birthDate}

        onUserChange={this.handleUserChange}
        onUserSubmit={this.handleUserSubmit}
        onChangeViewMode={this.props.onChangeViewMode}
      />
    )
  }
}

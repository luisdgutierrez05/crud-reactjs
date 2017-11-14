import React from 'react';

export default class UserRow extends React.Component {

  handleEditUser(event) {
    alert("Edit")
  }

  handleDeleteUser(event) {
    alert("Delete")
  }

  render() {
    const user = this.props.user;

    return(
      <tr>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.birthDate}</td>
        <td>{user.email}</td>
        <td>
          <button className="btn btn-primary m-r-1em" onClick={this.handleEditUser}>Edit</button>
          <button className="btn btn-danger" onClick={this.handleDeleteUser}>Delete</button>
        </td>
      </tr>
    )
  }
}

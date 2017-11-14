import React from 'react';

export default class UserRow extends React.Component {
  render() {
    const user = this.props.user;

    return(
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.birthDate}</td>
        <td>{user.email}</td>
        <td>
          <button className="btn btn-primary m-r-1em" onClick={() => this.props.onEditUser(user.id)}>Edit</button>
          <button className="btn btn-danger" onClick={() => this.props.onDeleteUser(user.id)}>Delete</button>
        </td>
      </tr>
    )
  }
}

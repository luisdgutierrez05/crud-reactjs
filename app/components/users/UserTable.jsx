import React from 'react';
import UserRow from './UserRow';

export default class UserTable extends React.Component {

  renderRows() {
    const {
      filterText,
      users,
    } = this.props;

    if (users.length === 0) {
      return(<tr key={0}><td colSpan={6} align={"center"}>No users</td></tr>);
    }

    return users
      .filter( user => {
        if (filterText === "") {
          return true;
        } else {
          if ((user.firstName.toLowerCase().indexOf(filterText.toLowerCase()) === -1) &&
              (user.lastName.toLowerCase().indexOf(filterText.toLowerCase()) === -1) &&
              (user.birthDate.indexOf(filterText) === -1)) {
            return;
          }
        }
      })
      .map((user) => {
        const {
          onEditUser,
          onDeleteUser,
        } = this.props;

        const { id } = user;

        return (
          <UserRow
            user={user}
            key={id}
            onEditUser={onEditUser}
            onDeleteUser={onDeleteUser}
          />
        )
      });
  }

  render() {
    return(
      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    )
  }
}

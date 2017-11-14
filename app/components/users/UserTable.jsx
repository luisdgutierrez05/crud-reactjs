import React from 'react';
import UserRow from './UserRow';

export default class UserTable extends React.Component {

  // filterUser(user, filterText) {
  //   if ((user.firstName.toLowerCase().indexOf(filterText.toLowerCase()) === -1) &&
  //       (user.lastName.toLowerCase().indexOf(filterText.toLowerCase()) === -1) &&
  //       (user.birthDate.indexOf(filterText) === -1)) {
  //     return;
  //   }
  // }

  render() {
    const filterText = this.props.filterText;
    const rows = [];

    if(this.props.users !== undefined) {
      this.props.users.forEach((user) => {
        // this.filterUser(user, filterText);
        if ((user.firstName.toLowerCase().indexOf(filterText.toLowerCase()) === -1) &&
            (user.lastName.toLowerCase().indexOf(filterText.toLowerCase()) === -1) &&
            (user.birthDate.indexOf(filterText) === -1)) {
          return;
        }
        rows.push(<UserRow user={user} key={user.id} />);
      });
    }

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
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

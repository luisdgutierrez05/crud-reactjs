import React from 'react';
import UserSearchBar from './UserSearchBar';
import UserTable from './UserTable';
import { Link } from 'react-router-dom';

export default class UserIndex extends React.Component {

  render() {
    const { users, filterText, isDirty } = this.props;
    return(
      <div className="mt-3">
        <nav className="navbar navbar-toggleable-md fixed-top">
          <div className="collapse navbar-collapse">
            <h2 className="navbar-nav mr-auto">Users</h2>
            <form className="form-inline pull-right">
              <Link to="/users/new" className="btn btn-primary">Create</Link>
            </form>
          </div>
        </nav>

        <UserSearchBar
          filterText={filterText}
          isDirty={isDirty}
          onFilterTextChange={this.props.onFilterTextChange}
        />

        <div className="page-header" />

        <UserTable
          users={users}
          filterText={filterText}
          onEditUser={this.props.onEditUser}
          onDeleteUser={this.props.onDeleteUser}
        />
      </div>
    );
  }
}

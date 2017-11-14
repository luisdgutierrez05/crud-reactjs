import React from 'react';
import UserSearchBar from './UserSearchBar';
import UserTable from './UserTable';

export default class UserIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      id: null,
      firstName: "",
      lastName: "",
      birthDate: "",
      email: "",
      data: []
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText: filterText });
  }

  render() {
    return(
      <div className="mt-3">
        <nav className="navbar navbar-toggleable-md fixed-top">
          <div className="collapse navbar-collapse">
            <h2 className="navbar-nav mr-auto">Users</h2>
            <form className="form-inline pull-right">
              <a href="#" className="btn btn-primary"
                onClick={() => this.props.changeViewMode('create')}>
                  Create
              </a>
            </form>
          </div>
        </nav>
        <UserSearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <div className="page-header" />
        <UserTable
          users={this.state.users}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

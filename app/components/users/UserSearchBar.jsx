import React from 'react';

export default class UserSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event.target.value);
  }

  render() {
    const filterText = this.props.filterText;

    return (
      <form className="form-inline">
        <fieldset className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search..."
            value={filterText}
            onChange={this.handleFilterTextChange}
          />
        </fieldset>
      </form>
    )
  }
}

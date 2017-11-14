import React from 'react';
import UserCardPreview from './UserCardPreview';

export default class UserCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      birthDate: ""
    }

    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    const email = this.state.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const birthDate = this.state.birthDate;

    return(
      <div className="row">

        <div className="col-sm-6">
          <div className="card">
            <div className="card-block">
              <h3 className="card-title">Create User</h3>
              <form className="well well-lg">

                <div className="form-group row">
                  <label htmlFor="user_email" className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-8">
                    <input name="email" className="form-control" type="email" onChange={this.handleUserChange} id="user_email" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="user_first_name" className="col-sm-3 col-form-label">First Name</label>
                  <div className="col-sm-8">
                    <input name="firstName" className="form-control" type="text" onChange={this.handleUserChange} id="user_first_name" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="user_last_name" className="col-sm-3 col-form-label">Last Name</label>
                  <div className="col-sm-8">
                    <input name="lastName" className="form-control" type="text" onChange={this.handleUserChange} id="user_last_name" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="user_birth_date" className="col-sm-3 col-form-label">Birth Date</label>
                  <div className="col-sm-8">
                    <input name="birthDate" className="form-control" type="date" onChange={this.handleUserChange} id="user_birth_date" />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="offset-sm-11 col-sm-11">
                    <button type="submit" className="btn btn-primary pull-right">Create</button>
                    <a href="#" className="btn btn-default pull-right m-r-1em"
                      onClick={() => this.props.changeViewMode('index')}>
                        Cancel
                    </a>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>

        <UserCardPreview
          email={email}
          firstName={firstName}
          lastName={lastName}
          birthDate={birthDate}
          onChange={this.handleUserChange}
        />
      </div>
    )
  }
}

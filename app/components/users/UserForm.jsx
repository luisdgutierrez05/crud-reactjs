import React from 'react';
import PropTypes from 'prop-types';
import UserCardPreview from './UserCardPreview';
import { Link } from 'react-router-dom';

export default class UserForm extends React.Component {

  render () {

    const {email, firstName, lastName, birthDate, onUserChange, onUserSubmit} = this.props;

    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-block">
              <h3 className="card-title">Create User</h3>
              <form className="well well-lg" onSubmit={onUserSubmit}>

                <div className="form-group row">
                  <label htmlFor="user_email" className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-8">
                    <input name="email" className="form-control" type="email" value={email} onChange={onUserChange} id="user_email" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="user_first_name" className="col-sm-3 col-form-label">First Name</label>
                  <div className="col-sm-8">
                    <input name="firstName" className="form-control" type="text" value={firstName} onChange={onUserChange} id="user_first_name" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="user_last_name" className="col-sm-3 col-form-label">Last Name</label>
                  <div className="col-sm-8">
                    <input name="lastName" className="form-control" type="text" value={lastName} onChange={onUserChange} id="user_last_name" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="user_birth_date" className="col-sm-3 col-form-label">Birth Date</label>
                  <div className="col-sm-8">
                    <input name="birthDate" className="form-control" type="date" value={birthDate} onChange={onUserChange} id="user_birth_date" />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="offset-sm-11 col-sm-11">
                    <button type="submit" className="btn btn-primary pull-right">Create</button>
                    <Link to="/" className="btn btn-default pull-right m-r-1em">
                        Cancel
                    </Link>
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
          onChange={onUserChange}
        />
      </div>
    )
  }
}

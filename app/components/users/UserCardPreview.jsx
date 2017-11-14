import React from 'react';

export default class UserCardPreview extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange() {
    this.props.onUserChange(e.target.value);
  }

  render() {
    return (
      <div className="col-sm-5 form-card-preview">
          <div className="card">
            <div className="card-block">
              <h3 className="card-title">Card Preview</h3>
              <div className="well well-lg">

                <div className="form-group row">
                  <label htmlFor="" className="col-sm-4 col-form-label">Email:</label>
                  <div className="col-sm-5">
                    <span className="col-sm-12 col-form-label">{this.props.email}</span>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="" className="col-sm-4 col-form-label">First Name:</label>
                  <div className="col-sm-5">
                    <span className="col-sm-12 col-form-label">{this.props.firstName}</span>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="" className="col-sm-4 col-form-label">Last Name:</label>
                  <div className="col-sm-5">
                    <span className="col-sm-12 col-form-label">{this.props.lastName}</span>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="" className="col-sm-4 col-form-label">Date of Birth:</label>
                  <div className="col-sm-5">
                    <span className="col-sm-10 col-form-label">{this.props.birthDate}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
    )
  }
}

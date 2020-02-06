import React, { Component } from 'react'

import PropTypes from "prop-types";
import classnames from "classnames";

export default class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient_name: '',
      patient_dob: '',
      patient_gender: '',
      patient_age: '',
      patient_aadharno: '',
      patient_appointmentdate: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit(e) {
    e.preventDefault();

    console.log(`${this.state.patient_name}`);
    console.log(`${this.state.patient_age}`);
    console.log(`${this.state.patient_appointmentdate}`);
    console.log(`${this.state.patient_gender}`);

    this.setState({
      patient_name: '',
      patient_dob: '',
      patient_gender: '',
      patient_age: '',
      patient_aadharno: '',
      patient_appointmentdate: ''
    });
  }
  render() {
        return (
          <div className="register">
          <div className="container">
            <div className="row" style={{marginTop: 20}}>
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Medical Billing</h1>
                <h2>
                  Patient Demographic Information
                </h2>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label> Patient Name: </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="patient_name"
                      required
                      value={this.state.patient_name} 
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      placeholder="Date of Birth"
                      name="patient_dob"
                      value={this.state.patient_dob}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Gender"
                      name="patient_gender"
                      value={this.state.patient_gender}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="age"
                      name="patient_age"
                      onChange={this.onChange}
                      value={this.state.patient_age}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      placeholder="Appointment date"
                      name="patient_appointmentdate"
                      value={this.state.patient_appointmentdate}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Aadhar Number"
                      name="patient_aadharno"
                      value={this.state.patient_aadharno}
                      onChange={this.onChange}
                    />
                  </div>
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
  
        )
    }
}

import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            password: ''
        }
    }
    handleUserNameChange = (e)=> {
        let uname = e.target.value;
        this.setState({uname: uname});
    }
    handlePasswordChange = (e)=> {
        let pass = e.target.value;
        this.setState({password: pass});
    }
    handleLogin() {
        console.log(this.state.uname);
    }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form>
                  <div className="form-label-group">
                    <input
                      className="form-control"
                      placeholder="User Name"
                      required
                      autoFocus
                      onChange={this.handleUserNameChange}
                    />
                    <label htmlFor="inputEmail">User Name</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                      onChange={this.handlePasswordChange}
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                     onClick={this.handleLogin}
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

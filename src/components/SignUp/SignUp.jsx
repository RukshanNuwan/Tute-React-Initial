import React, { Component } from 'react'

// ---------------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------------
import './SignUp.css'

export default class Login extends Component {
    render() {
        return (
            <div className="SignUpParent">
                <div className="SignUpName d-flex justify-content-center align-items-center">
                    <h1 className="SignUpHeader">SIGN UP</h1>
                </div>
                <div className="SignUpForm p-4">
                    <form>
                        <div className="form-group">
                            <label htmlFor="txtUserName">User Name</label>
                            <input type="text" className="form-control" id="txtUserName" name="username" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="txtEmail">Email Address</label>
                            <input type="email" className="form-control" id="txtEmail" name="email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="txtPassword">Password</label>
                            <input type="password" className="form-control" id="txtPassword" name="password" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="txtConfirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="txtConfirmPassword" name="confirmpassword" />
                        </div>

                        <button type="submit" className="btn btn-primary btnRegister mt-5">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

// ---------------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------------
import './Login.css'

export default class Login extends Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    // -------------------------------------------------------------------------------------------
    // Functions declaration - [Form Handling]
    // -------------------------------------------------------------------------------------------
    // Function for get values from input field
    onChangeHandler = (event) => {
        const {name, value} = event.target;

        this.setState({
            // ES6
            [name]: value,
        })
    }

    // Function for Submit button
    onSubmitHandler = () => {
        alert(JSON.stringify(this.state));
    }

    render() {
        return (
            <div className="LoginParent">
                <div className="LoginName d-flex justify-content-center align-items-center">
                    <h1 className="LoginHeader">LOGIN</h1>
                </div>
                <div className="LoginForm p-4">
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="form-group">
                            <label htmlFor="txtEmail">Email Address</label>
                            <input type="email" className="form-control" id="txtEmail" name="email" onChange={this.onChangeHandler} value={this.state.email} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="txtPassword">Password</label>
                            <input type="password" className="form-control" id="txtPassword" name="password" onChange={this.onChangeHandler} value={this.state.password} />
                        </div>

                        <button type="submit" className="btn btn-primary btnSubmit mt-5">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

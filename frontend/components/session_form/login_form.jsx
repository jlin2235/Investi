//PARTIAL USED TO DISPLAY LOGIN OR SIGNUP
import React from 'react';
import { Link } from "react-router-dom";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => {this.props.history.push('/home')})
            //REMEMBER THIS, DONT FORGET
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


        
    

    render() {
        return (
        <div className='login-form-container'>
            
            <div className='login-form-image-side'>
                {/* <img src={window.login} /> */}
            </div>
            
            <div className='login-form-login-box-side'>
                <div className='login-form-login-box'>
                    
                    <h1 className='login-welcome-text'>Welcome to Investi</h1>
                    <form onSubmit={this.handleSubmit}> 
                            {/* DONT KNOW IF I NEED THIS HANDLESUBMIT  */}
                        <br />
            
                        
                        <div>
                            <label><span className='login-label-text'>Email or username</span>
                                <div>
                                    <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('email')}
                                    required
                                    className='login-input-field'/>    
                                </div>
                            </label>
                        
                        <br />
                            <label><span className='login-label-text'>Password:</span>
                                <div>
                                    <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className='login-input-field'
                                    required/>
                                </div>
                            </label>
                        
                            {((this.props.formType === 'Sign Up') ? this.signupForm() : null )}
                            
                            <div>
                                <Link to='/' className='login-forget-password-text'> Forgot your username or password?</Link>
                            </div>
                            <br />
                            {this.renderErrors()}
                            {/* <p className='login-forget-password-text'>Forgot your username or password?</p> */}
                            <input type="submit" value={this.props.formType} className='login-button' />
                            {/* <button className='login-button' onClick={this.handleSubmit}>{this.props.formType}</button> */}
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default SessionForm;

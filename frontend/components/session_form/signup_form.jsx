import React from 'react';
import { Link } from "react-router-dom";


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            balance:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        // debugger
        this.props.processForm(user);
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
            <div className='signup-page-container'>
                <div className='signup-progress-tracker-bar'>
                    <Link to="/"><img id='investi-logo' src={window.logo} /></Link>
                    <span> Account Setup</span>
                    <span id='signup-progress-tracker-bar-info-dark-color'>User Information </span>
                    <span> Security</span>
                    <span>Funding </span>
                    <span> Submit</span>
                </div>
                <div className='signup-form-container'>
                    <form className='signup-form-header-container' onSubmit={this.handleSubmit}>
                        <h1>Make Your Money Move</h1>
                        <p>Investi lets you invest in your future, commission-free.</p>
                        <br />
                        <div className='signup-form-input'>
                                <div> 
                                    <input type="text"
                                    placeholder="first name"
                                    value={this.state.username}
                                    onChange={this.update('first_name')}
                                    required
                                    />    
                                </div>
                                <div>
                                    <input type="text"
                                    placeholder="last name"
                                    value={this.state.username}
                                    onChange={this.update('last_name')}
                                    required

                                    />
                                 </div>
                                <div>
                                    <input type="text"
                                    placeholder="username"
                                    value={this.state.username}
                                    onChange={this.update('email')}
                                    required
                                    />
                                </div>
                                <div>
                                    <input type="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    required
                                    />
                                </div>
                                <div>
                                    <input type="number"
                                    placeholder="Initial buying power"
                                    value={this.state.username}
                                    onChange={this.update('balance')}
                                    required
                                    />
                                </div>
                          
                                {/* {this.renderErrors()} */}
                                <input type="submit" value={this.props.formType} className='signup-button' />
                                <div>
                                    <Link to='/login' className='signup-page-already-user-text'> Already a User? Sign in here</Link>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupForm;

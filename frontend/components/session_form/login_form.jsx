//PARTIAL USED TO DISPLAY LOGIN OR SIGNUP
import React from 'react';

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
            .then(() => {this.props.history.push('/')})
            //REMEMBER THIS DONT FORGET
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


    signupForm() {
        // debugger
        return (
            <div>
                <label>first_name:
                    <input type="text"
                    placeholder="first name"
                    value={this.state.username}
                    onChange={this.update('email')}
                    />    
                </label>
                <br />
                <label>last_name:
                    <input type="text"
                    placeholder="last name"
                    value={this.state.username}
                    onChange={this.update('email')}
                    />
                </label>
                <br />   
                <label>balance:
                    <input type="number"
                    placeholder="Initial buying power"
                    value={this.state.username}
                    onChange={this.update('email')}
                    />
                </label>
            </div>
        )
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Welcome to Investi!
            <br />
          
                    {this.renderErrors()}
                    <div>
            <br />
                        <label>Username:
                            <input type="text"
                                placeholder = "username"
                                value={this.state.username}
                                onChange={this.update('email')}
                            />
                        </label>
                        <br />
                        <label>Password:
                                <input type="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br />
                        {((this.props.formType === 'Sign Up') ? this.signupForm() : null )}

                        <input type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;

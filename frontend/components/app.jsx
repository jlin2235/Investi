//AUTH ROUTES FILE


import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";


import GreetingContainer from './greetings/greeting_container'
import LogInFormContainer from './session_form/login_form_container'
import SignUpFormContainer from './session_form/signup_form_container'
import HomeContainer from './home/home_container'
import ShowContainer  from './show/show_container'
import { AuthRoute, ProtectedRoute } from './../util/route_util'

const App = (ownprops) => (
    <div>
        {/* <h1>Testing</h1> */} 
        {/* <Link to="/"> Investi </Link> */}
        {/* <GreetingContainer /> */}
        <Switch>
            {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}


            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
            <ProtectedRoute exact path="/home" component={HomeContainer} />
            <ProtectedRoute exact path="/home/:symbol" component={ShowContainer} />
        </Switch>
    </div>
);
export default App;






import React from 'react';
import NavBarContainer from './../nav_bar/nav_bar_container';
import Cover from './cover';
import CoverContainer from './cover_container'
import { Link } from 'react-router-dom';
import { login } from './../../util/session_api_util'

class GreetingForm extends React.Component {

 

    render() {
        return (
            <div>
                <NavBarContainer />
                {/* <Cover login={login}/> */}
                <CoverContainer />
                {/* <h1>HI</h1> */}
            </div>
        )
    }

}

export default GreetingForm;

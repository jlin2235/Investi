import React from 'react';
import NavBarContainer from './../nav_bar/nav_bar_container';
import Cover from './cover';
import { Link } from 'react-router-dom';


class HomeForm extends React.Component {



    render() {
        // debugger
        return (
            <div>
                <NavBarContainer />
                <Cover />
                {/* <h1>HI</h1> */}
            </div>
        )
    }

}

export default HomeForm;

import React from 'react';
import { Link } from 'react-router-dom';
// import images from './../../../app/assets/images/RobinhoodLogo.jpg'


//MSP AND MDP PASSED IN AS PROPS: currentUser and logout(function)
const Greeting = ({ currentUser, logout }) => {
    
    const sessionLinks = () => (
        <div className='nav-bar-'>
            {/* <img src='./../../../app/assets/images/RobinhoodLogo.jpg' /> */}
            <Link to="/"> Investi <img src={window.logo}/></Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up!</Link>
        </div>
    );
    const personalGreeting = () => {
        return(            
            <div>
                <h2>Hi, {currentUser.first_name}!</h2>
                <button onClick={logout}>Log Out</button>
            </div>
        )
        
    };
    
    //IF STATEMENT USED TO SEE IF THE USER IS LOGGED IN: WILL RENDER DIFFERENT PAGE 
    
    if(currentUser){
        return personalGreeting()
    }else{
        <Link to="/"> Investi </Link>
        return sessionLinks()
    }  
         
};


export default Greeting;
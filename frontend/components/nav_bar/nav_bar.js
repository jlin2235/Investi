import React from 'react';
import { Link } from 'react-router-dom';
// import images from './../../../app/assets/images/RobinhoodLogo.jpg'


//MSP AND MDP PASSED IN AS PROPS: currentUser and logout(function)
const NavBar = ({ currentUser, logout }) => {
    
    const sessionLinks = () => (
        <div className='nav-bar-container'>
            <div className='left-side-container'>
                <Link to="/"><img id='investi-logo' src={window.logo}/></Link>
                <span>Linkedln</span>
                <span>Resume</span>
            </div>
            <div>
            <Link id='login' to="/login">Login</Link>
            <Link id='Sign-up' to="/signup"><span>Sign Up</span></Link>
            </div>
        </div>
    );
    const personalGreeting = () => {
        return(            
            <div>
                <h2>Hi, {currentUser.first_name}!</h2>
                <Link to="/login">Account</Link>
                <button onClick={logout}>Log Out</button>
            </div>
        )
        
    };
    
    //IF STATEMENT USED TO SEE IF THE USER IS LOGGED IN: WILL RENDER DIFFERENT PAGE 
    
    if(currentUser){
        return personalGreeting()
    }else{
        <Link to="/"> </Link>
        return sessionLinks()
    }  
         
};


export default NavBar;
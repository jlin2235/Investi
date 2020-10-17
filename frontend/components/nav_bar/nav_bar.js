import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './../search/search_container'
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
            <div className='NavBar-After-SignUp-Container'>
                <div className='NavBar-After-SignUp-Left-Side'>
                {/* <Link to="/"><img id='investi-logo' src={window.logo} /></Link> */}
                    <h2>Welcome back</h2>
                    <SearchBarContainer />
                </div>
                <div className='NavBar-After-SignUp-Right-Side'>
                    <Link to="/home">Account</Link>
                    <button onClick={logout}>Log Out</button>
                </div>

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
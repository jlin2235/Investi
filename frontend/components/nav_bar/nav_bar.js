import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './../search/search_container'
// import images from './../../../app/assets/images/RobinhoodLogo.jpg'


//MSP AND MDP PASSED IN AS PROPS: currentUser and logout(function)
const NavBar = ({ currentUser, logout }) => {

    
    
    const sessionLinks = () => (
    <div className='nav-bar-container'>
            <div className='left-side-container'>
                <Link to="/"><img id='investi-logo' src={window.logo}/></Link>
                <a target='_blank' href='https://www.linkedin.com/in/jlin2235/'> 
                    <span>Linkedln</span>
                </a>
                <a href='https://github.com/jlin2235' target='_blank'>
                    <span>GitHub</span>
                </a>
                <a href='https://jlin2235.github.io/' target='_blank'>
                    <span>Personal Site</span>
                </a>

            </div>
            <div>
            <Link id='login' to="/login">Login</Link>
            <Link id='Sign-up' to="/signup"><span>Sign Up</span></Link>
            </div>
        </div>
    );
    const personalGreeting = () => {
        const [show,setShow] = useState(false);
        const handleDropdown = () => {
            setShow(!show);
        };


        return(            
            <div className='NavBar-After-SignUp-Container'>
                <div className='NavBar-After-SignUp-Left-Side'>
                {/* <Link to="/"><img id='investi-logo' src={window.logo} /></Link> */}
                    <h2>Welcome back</h2>
                    <SearchBarContainer />
                </div>
                <div className='NavBar-After-SignUp-Right-Side'>
                    <Link to="/home">Portfolio</Link>
                    <div className='dropdown-menu-main-container'>
                        <button onClick={handleDropdown}> Account</button>
                        {show && (
                            <ul className='dropdown-menu-li-container'>
                                <li className="dropdown-list">
                                    <i class="fas fa-child"></i>
                                    <a href='https://jlin2235.github.io/' target='_blank'>
                                        <span className="dropdown-menu-item">Jin Lin</span>
                                    </a>
                                </li>
                                <li className="dropdown-list">
                                    <i class="fab fa-github menu-icon"></i>
                                    <a href='https://github.com/jlin2235' target='_blank'>
                                        <span className="dropdown-menu-item">GitHub</span>
                                    </a>
                                </li>
                                <li className="dropdown-list">
                                    <i class="fab fa-linkedin-in menu-icon"></i>
                                    <a target='_blank' href='https://www.linkedin.com/in/jlin2235/'> 
                                        <span className="dropdown-menu-item">Linkedln</span>
                                    </a>
                                </li>
                                {/* <li className="dropdown-list">
                                    <span className="dropdown-menu-item"> Personal-Site</span>
                                </li> */}
                            </ul>
                        )}
                    </div>
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
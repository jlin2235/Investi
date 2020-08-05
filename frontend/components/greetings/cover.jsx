import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'


class Cover extends React.Component{

    constructor(props){
        super(props);
        this.handleDemoSignin = this.handleDemoSignin.bind(this);
    }


handleDemoSignin() {
    
    let demoinfo = { email: 'demoUser@gmail.com',
                     password: 'demopassword' }
    // debugger
    this.props.login(demoinfo)
        .then(() => { this.props.history.push('/home')})
    
}   

render(){
    return(
        <div>
            <div className='first-section'>
                <div className='purpose-statement-container'>
                    <h1 className='cover-page-motto'>Make money while you sleep!</h1>
                    <p className='cover-page-investi-description'> Investi, a pioneer of commission-free investing, gives you more ways to make your money work harder</p>
                    <button className='cover-page-demo' onClick={this.handleDemoSignin}>Demo</button>
                </div>
                <div className='iphone-card-iphone-gif-container'> 
                    <video autoPlay loop muted preloaded='auto' className='iphone-gif'>
                        <source
                            src={window.iphone_gif}
                            type='video/mp4'
                        />
                    </video>
                    <div className='iphone-image-container'> 
                        <img src={card_and_iphone} className='card-iphone-image'/>
                    </div>
                </div>
            </div>
            <div className='second-section-container'>
                <h1 className='second-section-motto'>Retire Smart, Retire Young</h1>
                <p className='second-section-description'>Are you tired of your job? Are you ready to retire? Have no fear for Investi is here. Checkout our user friendly, 
                    commission free trading app. </p>
            </div>

            <div className='cover-page-footer-container'>
                <p><span>Investi</span> Robinhood clone, site is constantly under improvement</p>
                <div className='cover-page-footer-section-two'>
                    <div>
                        <p>Jin Lin</p>
                        <p>Email: Jlin2235@gmail.com</p>
                    </div>
                    <div className='profile-information-icons'>
                        <img id='cover-page-icon' src={gitHubIcon}/>
                        <img id='cover-page-icon' src={linkedlnIcon}/>
                    </div>
                </div>
            </div>


        </div>
    )
}



}

export default withRouter(Cover);
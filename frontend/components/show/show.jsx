import React from 'react';


class Show extends React.Component{
    
    componentDidMount(){
        debugger
        this.props.receiveProfile(this.props.symbol)

    }

    render(){
        const { profile } = this.props
        const { symbol } = this.props
        debugger
            if (!this.props.profile.description){
                return null
            }
            else{  
                return(
                    <div>
                        <div className='show-page-stockinfo-container'>
                            <h1 id='show-page-stockinfo-container-about-text'>About</h1>


                            <div>{profile.description}</div>
                            <div className='show-page-stockinfo-container-info-details'> 
                                <div>
                                    <h2>Company</h2>
                                    <div>{profile.companyName}</div>
                                </div>
                                <div>
                                    <h2>Symbol</h2>
                                    <div>{profile.symbol}</div>
                                </div>
                                <div>
                                    <h2>Number of employees</h2>
                                    <div>{profile.employees}</div>
                                </div>
                                <div>
                                    <h2>CEO</h2>
                                    <div>{profile.CEO}</div>
                                </div>
                                <div>
                                    <h2>Website</h2>
                                    <div>{profile.website}</div>
                                </div>
                                <div>
                                    <h2>Sector</h2>
                                    <div>{profile.sector}</div>
                                </div>
                        {/* <div>{profile.}</div> */}
                            </div>
                        </div>
                    </div>
        
                )
            }
    }


}

export default Show;
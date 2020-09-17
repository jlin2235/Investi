import React from 'react';
import NavBarContainer from './../nav_bar/nav_bar_container'
// import NEWS from './../news/news_container'


class Show extends React.Component{

    constructor(props){
        super(props)
        
        this.displayNews = this.displayNews.bind(this)
    }
    
    componentDidMount(){
        debugger
        this.props.receiveProfile(this.props.symbol);
        this.props.receivenews();
        
    }

    componentDidUpdate(previousProps){
        if (previousProps.match.params.symbol !== this.props.match.params.symbol){
            this.props.receiveProfile(this.props.symbol)
        }
    }


    displayNews() {

        debugger
        if(typeof this.props.news.articles === 'undefined'){
            return null;
        }
        return (
            this.props.news.articles.map((newsarticle, idx) => (
                <a key={idx} target="_blank" href={newsarticle.url}>
                    <li className='show-page-news-feed-list-items' >
                        <div>
                            <img className='show-page-news-feed-image' src={newsarticle.urlToImage} />
                        </div>
                        <div>
                            <h1 className='show-page-news-feed-name'>{newsarticle.source.name}</h1>
                            <p className='show-page-news-feed-title'>{newsarticle.title}</p>
                            <p className='show-page-news-feed-description'>{newsarticle.description}</p>
                        </div>
                    </li>
                </a>

            )))
        
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
                    <NavBarContainer />
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

                        <div className='show-page-news-feed-container'>
                            <h1 id='show-page-news-feed-container-text'>News Feed</h1>
                            <ul>
                                {/* {this.displayNews()} */}
                            </ul>
                        </div>
               

                    </div>
        
                )
            }
    }


}

export default Show;
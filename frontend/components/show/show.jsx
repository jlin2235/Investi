import React from 'react';
import NavBarContainer from './../nav_bar/nav_bar_container';
import TransactionForm from './transaction_container';
import ShowPageGraph from '../graph/show_page_graph_container'

class Show extends React.Component{

    constructor(props){
        super(props)
        
        this.displayNews = this.displayNews.bind(this);
        this.displayProfileInfo = this.displayProfileInfo.bind(this)
    }
    
    componentDidMount(){
         
        this.props.receiveProfile(this.props.symbol);
        this.props.receiveNews();
        this.props.receivePrice(this.props.symbol);
        // this.props.receiveFiveMin(this.props.symbol); 
        // this.props.receiveThirtyMin(this.props.symbol);
        // this.props.receiveFiveYr(this.props.symbol);
    }

    componentWillUnmount() {
        debugger
    }

    componentDidUpdate(previousProps){
        let transaction = {
            user_id: this.props.currentUser.id,
            symbol: this.props.symbol
        }
        let watchlist = {
            user_id: this.props.currentUser.id,
            symbol: this.props.symbol
        }
       
        debugger
        if (previousProps.match.params.symbol !== this.props.match.params.symbol){
            this.props.receiveProfile(this.props.symbol);
            this.props.getOneTran(transaction);
            this.props.receivePrice(this.props.match.params.symbol);


        }
    }


    displayNews() {

        if (typeof this.props.news.articles === 'undefined') {
            return null;
        }
        let newsArray = []
        this.props.news.articles.map((newsarticle, idx) => {
            if (newsarticle.urlToImage) {
                newsArray.push(
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
                )
            }

        })
        return (
            newsArray
        )

    }

    displayProfileInfo() {
        if (typeof this.props.profile === 'undefined') {
            return null;
        }
        const { profile } = this.props
        const { symbol } = this.props
        return (
            <div>
                <h1 id='show-page-stockinfo-container-about-text'>About</h1>
                <div>{profile.description}</div>
                <div className='show-page-stockinfo-container-info-details'>
                    <div>
                        <h2>CEO</h2>
                        <div>{profile.CEO}</div>
                    </div>
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
                        <h2>Website</h2>
                        <div>{profile.website}</div>
                    </div>
                    <div>
                        <h2>Sector</h2>
                        <div>{profile.sector}</div>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        
         
        if (!this.props.profile.description){
            return null
        }
        else{  
            return(
                <div className='showPage-main-container'>
                    <NavBarContainer />
                    <div className='showPage-graph-about-news-transaction-container'>
                        <div>
                            <ShowPageGraph/>
                            <div className='show-page-stockinfo-container'>
                                {this.displayProfileInfo()}
                            </div>
                            <div className='show-page-news-feed-container'>
                                <h1 id='show-page-news-feed-container-text'>News Feed</h1>
                                <ul>
                                    {this.displayNews()}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <TransactionForm />
                        </div>
                    </div>
                </div>
        
                )
            }
    }


}

export default Show;
import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import GraphContainer from '../graph/graph_container'
import PortfolioContainer from './portfolio_container'



class HomeForm extends React.Component{

    constructor(props) {
        super(props)

        this.displayNews = this.displayNews.bind(this)
    }

    componentDidMount() {
        this.props.receiveNews();

        let transaction = {
            user_id: this.props.currentUser.id
        }
        this.props.getAllTransaction(transaction)
            .then(transactions => {
                let symbolsArray = Object.keys(transactions.transactions);
                this.props.receivePrices(symbolsArray);
                this.props.FiveDaysTenMinBatchPricesIEX(symbolsArray);
                this.props.FiveYearBatchPricesIEX(symbolsArray);
         
            })
    }


    displayNews() {
        
        if (typeof this.props.news.articles === 'undefined') {
            return null;
        }
        let newsArray = []
        this.props.news.articles.map((newsarticle, idx) => {
            if( newsarticle.urlToImage){
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
                )}

        })
        return (
            newsArray
            )

    }
    

    render(){
  
        
        return(
            <div className='homePage-main-container'>
                <NavBarContainer />
                <div className='homePage-graph-news-portfolio-container'>
                    <div className='homePage-graph-news-container'>
                        <GraphContainer />
                        <div className='show-page-news-feed-container'>
                            <h1 id='show-page-news-feed-container-text'>News Feed</h1>
                            <ul>
                                {this.displayNews()}
                            </ul>
                        </div>
                    </div>
                    <div className='homePage-portfolio-container'>
                        <PortfolioContainer />
                    </div>
                </div>
            </div>
        )
    }

}

export default HomeForm;


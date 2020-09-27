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
        debugger

        let transaction = {
            user_id: this.props.currentUser.id
        }
        this.props.getAllTransaction(transaction)
            .then(transactions => {
                debugger
                let symbolsArray = Object.keys(transactions.transactions);
                this.props.receivePrices(symbolsArray);
                this.props.FiveDaysTenMinBatchPricesIEX(symbolsArray);
                // symbolsArray.forEach(symbol => this.props.receiveFiveMinBatch(symbol))
            })
    }


    displayNews() {
        // debugger
        if (typeof this.props.news.articles === 'undefined') {
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
        
        return(
            <div>
                <NavBarContainer />
                <GraphContainer />
                <div className='show-page-news-feed-container'>
                    <h1 id='show-page-news-feed-container-text'>News Feed</h1>
                    <ul>
                        {this.displayNews()}
                    </ul>
                </div>
                {/* <PortfolioContainer /> */}
            </div>
        )
    }

}

export default HomeForm;


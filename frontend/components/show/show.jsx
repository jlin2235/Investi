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

        // return(
        //     <div>
        //     <a target="_blank" href='https://hbr.org/2020/08/a-financial-crisis-is-looming-for-smaller-suppliers'>
        //         <li className='show-page-news-feed-list-items' >
        //             <div>
        //                 <img className='show-page-news-feed-image' src={'https://hbr.org/resources/images/article_assets/2020/08/Aug20_08_1191254826.jpg'} />
        //             </div>
        //             <div>
        //                 <h1 className='show-page-news-feed-name'>SUPPLY CHAIN</h1>
        //                 <p className='show-page-news-feed-title'>A Financial Crisis Is Looming for Smaller Suppliers</p>
        //                 <p className='show-page-news-feed-description'>High - profile bankruptcies, refinancing deals, and drastic cost-cutting involving the likes of Brooks Brothers, JCPenney, Hertz, Neiman Marcus, Ford, and GM are testament to the financial distress wrought by the Covid-19 pandemic. But a less visible crisis deep within supply chains is destabilizing small and medium-sized enterprises (SMEs) and could add to the woes of the global economy.</p>
        //             </div>
        //         </li>
        //     </a>
        //         <a target="_blank" href='https://dothaneagle.com/business/investment/personal-finance/will-covid-19-turn-more-americans-into-investors/article_c838f90d-22cf-5437-b544-35e728d5c672.html'>
        //         <li className='show-page-news-feed-list-items' >
        //             <div>
        //                     <img className='show-page-news-feed-image' src={'https://bloximages.newyork1.vip.townnews.com/dothaneagle.com/content/tncms/assets/v3/editorial/b/f0/bf0c68ef-e218-5e7b-a094-80f580b6bfca/5f2c375b8ed8d.image.jpg'} />
        //             </div>
        //             <div>
        //                 <h1 className='show-page-news-feed-name'>PERSONAL FINANCE</h1>
        //                 <p className='show-page-news-feed-title'>Will COVID-19 Turn More Americans Into Investors?</p>
        //                 <p className='show-page-news-feed-description'>The coronavirus has undoubtedly had a devastating financial effect, both for the economy and for millions of individual American families. But amid all the bad news, there's one small piece of good news: The pandemic may prompt more people to start investing.</p>
        //             </div>
        //         </li>
        //     </a>
        //         <a target="_blank" href='https://www.masstransitmag.com/jobs/promotion/21149265/duluth-transit-authority-dta-director-of-finance'>
        //         <li className='show-page-news-feed-list-items' >
        //             <div>
        //                 <img className='show-page-news-feed-image' src={'https://img.masstransitmag.com/files/base/cygnus/mass/image/2020/08/DTA_Color_Logo.5f2c5e322c78d.png?auto=format&w=250'} />
        //             </div>
        //             <div>
        //                 <h1 className='show-page-news-feed-name'>FINANCE</h1>
        //                 <p className='show-page-news-feed-title'>Director of Finance</p>
        //                 <p className='show-page-news-feed-description'>The Duluth Transit Authority (DTA) is currently seeking to fill a Director of Finance position due to an upcoming retirement. The DTA is an award-winning transit agency that provides safe, convenient, and affordable public transit service (fixed route and paratransit) within the Twin Ports of Duluth, MN and Superior, WI and its surrounding areas</p>
        //             </div>
        //         </li>
        //     </a>
        //         <a target="_blank" href='https://www.pymnts.com/mobile-applications/2020/personal-finance-apps-managing-nicely/'>
        //         <li className='show-page-news-feed-list-items' >
        //             <div>
        //                     <img className='show-page-news-feed-image' src={'https://securecdn.pymnts.com/wp-content/uploads/2020/08/personal-finance-apps.jpg'} />
        //             </div>
        //             <div>
        //                 <h1 className='show-page-news-feed-name'>MOBILE APPLICATION</h1>
        //                 <p className='show-page-news-feed-title'>Personal Finance Apps Managing Nicely</p>
        //                     <p className='show-page-news-feed-description'>Top players are staying on top but playing a game of musical chairs as PYMNTS latest Provider Ranking of Personal Finance Apps shows a hint of movement in the category.</p>
        //             </div>
        //         </li>
        //     </a>
        //         <a target="_blank" href='https://www.nytimes.com/live/2020/08/06/business/stock-market-today-coronavirus'>
        //         <li className='show-page-news-feed-list-items' >
        //             <div>
        //                     <img className='show-page-news-feed-image' src={'https://static01.nyt.com/images/2020/08/06/business/06markets-brf-uber/merlin_174443172_7c34e9f9-7a43-4d39-bdab-e0c3348aec87-superJumbo.jpg?quality=90&auto=webp'} />
        //             </div>
        //             <div>
        //                 <h1 className='show-page-news-feed-name'>TRANSPORTATION</h1>
        //                 <p className='show-page-news-feed-title'>Uber’s Delivery Business Overtakes Rides: Live Updates</p>
        //                     <p className='show-page-news-feed-description'>Uber said on Thursday that its revenue in the second quarter dropped 29 percent to $2.2 billion from a year ago and that its net loss narrowed to $1.8 billion, as the ride-hailing giant deals with the fallout from the coronavirus pandemic.</p>
        //             </div>
        //         </li>
        //     </a>
        //         <a target="_blank" href='https://www.economist.com/the-world-this-week/2020/08/08/business-this-week'>
        //         <li className='show-page-news-feed-list-items' >
        //             <div>
        //                 <img className='show-page-news-feed-image' src={'https://hbr.org/resources/images/article_assets/2020/08/Aug20_08_1191254826.jpg'} />
        //             </div>
        //             <div>
        //                 <h1 className='show-page-news-feed-name'>BUSINESS THIS WEEK</h1>
        //                 <p className='show-page-news-feed-title'>TIK TOC</p>
        //                     <p className='show-page-news-feed-description'>In an extraordinary turn of events, Donald Trump said he would now give his blessing to Microsoft’s recent proposal to acquire the American operations of TikTok,</p>
        //             </div>
        //         </li>
        //     </a>
        //     <a target="_blank" href='https://hbr.org/2020/08/a-financial-crisis-is-looming-for-smaller-suppliers'>
        //         <li className='show-page-news-feed-list-items' >
        //             <div>
        //                     <img className='show-page-news-feed-image' src={'https://stmedia.stimg.co/ows_2abf1d2c-30bf-459a-9ea0-029a5b7d426a.jpg?auto=compress&crop=faces&dpr=1&w=525'} />
        //             </div>
        //             <div>
        //                 <h1 className='show-page-news-feed-name'>BUSINESS</h1>
        //                 <p className='show-page-news-feed-title'>3M cuts 1,700 more jobs after selling a business and grappling with virus slowdown</p>
        //                     <p className='show-page-news-feed-description'>After announcing in January that it would cut about 1,500 jobs in another restructuring, 3M has since moved to eliminate an additional 1,700 positions due to COVID-19 and the sale of its drug delivery business.</p>
        //             </div>
        //         </li>
        //     </a>
        //     </div>
        // )

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
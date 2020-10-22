import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import { Link } from 'react-router-dom';
// import moment from 'moment';
import numeral from 'numeral';

class Portfolio extends React.Component{
    
    constructor(props) {
        super(props);

        this.renderPortfolioStocks = this.renderPortfolioStocks.bind(this);
        this.renderWatchlist = this.renderWatchlist.bind(this);
    }
    
    renderPortfolioStocks(){
         
        if (this.props.graphPrices['fiveYear'] === undefined) {
            return null;
        }
        let data = this.props.graphPrices['fiveYear']


        let portfolioArray = [];
        let color;
        let gainLoss;
        let gainLossPercentage;
        // let todayDate = new Date(); //Tue Sep 22 2020 17:37:01 GMT-0400 (Eastern Daylight Time)
        // let dayOfWeek = todayDate.getDay(); //2
        let symbols = Object.keys(this.props.transactions);
        
        symbols.forEach((symbol, idx) => {
            
            let filterData = data[symbol].chart.filter(ele => {
                return ele
            })
             
            let dataForGraph = filterData.slice().reverse();
            gainLoss = dataForGraph.slice(-1)[0].close - dataForGraph[0].close;
            gainLossPercentage = numeral(gainLoss / dataForGraph[0].close).format('0.00%');
            if (gainLoss >= 0) {
                color = '#21ce99'
            }else {
                color = '#FF0000'
            }

            let renderReChart = (
                <LineChart width={100} height={50} data={dataForGraph}>
                        <XAxis dataKey="date" hide={true} />
                        <YAxis domain={['dataMin', 'dataMax']} axisLine={false} hide={true} />
                        <Line type="linear" dataKey="close" stroke={color} dot={false} strokeWidth={1} />
                </LineChart>
            )
            
            portfolioArray.push(
                <Link to={`/home/${symbol}`}>
                    <div key={idx} className='portfolio-stock-list-container'>
                        <div className='portfolio-info-left-container'>
                            <h1>{symbol}</h1>
                            <p>{numeral(this.props.transactions[symbol].shares).format('0,0')} shares</p>
                        </div>
                        <div className='portfolio-chart-container'>
                            {renderReChart}
                        </div>
                        <div className='portfolio-info-right-container'>
                            <h1>{numeral(this.props.price[symbol]).format('$0,0.00')}</h1>
                            <h1>{gainLossPercentage}</h1>
                        </div>
                    </div>
                </Link>
                )


        },this)

        return portfolioArray;
    }

    renderWatchlist(){
        
    }

    render() {
        return ( 
            <div className='main-portfolio-container'>
                <h1 className='portfolio-title'>Portfolio</h1>
                {this.renderPortfolioStocks()}
                <h1 className='portfolio-title'>Watchlist</h1>
                {this.renderWatchlist()}
            </div>
        )
    }
}

export default Portfolio;

import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

class Portfolio extends React.Component{
    
    constructor(props) {
        super(props);

        this.renderPortfolioStocks = this.renderPortfolioStocks.bind(this)
    }

    
    

    renderPortfolioStocks(){
        debugger
        let portfolioArray = []
        let symbols = Object.keys(this.props.transactions);
        symbols.forEach((symbol, idx) => {


            let renderReChart = (
                <LineChart width={100} height={50} data={data}>
                        <XAxis dataKey="date" padding={{ left: 30, right: 30 }} hide={true} />
                        <YAxis domain={['dataMin', 'dataMax']} axisLine={false} hide={true} />
                        <Line type="linear" dataKey="close" stroke="#8884d8" dot={false} strokeWidth={2} />
                </LineChart>
            )
            
            portfolioArray.push(renderReChart)


        })


    }

    render() {
        return ( 
            <div>
                {this.renderPortfolioStocks()}
                <h1>Portfolio</h1>
            </div>
        )
    }
}

export default Portfolio;

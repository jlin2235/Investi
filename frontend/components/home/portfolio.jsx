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

        if (Object.keys(this.props.transactions).length !== Object.keys(this.props.graphPrices).length) {
            return null;
        }


        let portfolioArray = [];
        let data;
        let todayDate = new Date(); //Tue Sep 22 2020 17:37:01 GMT-0400 (Eastern Daylight Time)
        let dayOfWeek = todayDate.getDay(); //2
        let symbols = Object.keys(this.props.transactions);
        
        symbols.forEach((symbol, idx) => {
            debugger
            let filterData = this.props.graphPrices[symbol].filter(ele => {
            // debugger
                if (dayOfWeek === 0 ){ // if SUNDAY
                    let friday = moment(todayDate).subtract(2,'day')
                    return moment(ele.date.split(" ")[0]).isSame(friday, 'day')
                }else if (dayOfWeek === 6){ // if SAT
                    let friday = moment(todayDate).subtract(1, 'day')
                    return moment(ele.date.split(" ")[0]).isSame(friday, 'day')
                }else{
                    return moment(ele.date.split(" ")[0]).isSame(todayDate, 'day')
                }
            })
            debugger
            data = filterData.slice().reverse();

            let renderReChart = (
                <LineChart width={100} height={50} data={data}>
                        <XAxis dataKey="date" padding={{ left: 30, right: 30 }} hide={true} />
                        <YAxis domain={['dataMin', 'dataMax']} axisLine={false} hide={true} />
                        <Line type="linear" dataKey="close" stroke="#8884d8" dot={false} strokeWidth={2} />
                </LineChart>
            )
            
            portfolioArray.push(renderReChart)


        },this)

        return portfolioArray;
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

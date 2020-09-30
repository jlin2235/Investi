import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';


class Graph extends React.Component {

    constructor(props) {
        super(props);

        this.totalPortfolioValue = this.totalPortfolioValue.bind(this)
        this.renderReCharts = this.renderReCharts.bind(this);
        this.graphDataCalculation = this.graphDataCalculation.bind(this)

        this.state = {
            dateViewed: '5y'
        }

    }

    graphDataCalculation() {
        debugger
        let data;
        let todayDate = new Date(); //Tue Sep 22 2020 17:37:01 GMT-0400 (Eastern Daylight Time)
        let dayOfWeek = todayDate.getDay(); //2
        let isWeekend = ((dayOfWeek === 0) || (dayOfWeek === 6)) //SUN/SAT
        let yesterday = moment().subtract(1, 'days');
        let symbols = Object.keys(this.props.transactions) //ARRAY
        let userBalance = this.props.currentUser.balance
        let dataArray = [];
    

       
        if ((this.props.graphPrices['oneWeek'] === undefined) ||
            (this.props.graphPrices['fiveYear'] === undefined)) 
            {
                return null;
            }
     
        if (this.state.dateViewed === '1d') {
            data = this.props.graphPrices['oneWeek']
        } else if (this.state.dateViewed === '1w') {
            data = this.props.graphPrices['oneWeek']
        } else {
            data = this.props.graphPrices['fiveYear']
        }
        

//ONE DAY VIEW/WEEKDAY
        if (this.state.dateViewed === '1d' && !isWeekend) { 

            if (dayOfWeek === 1){
                yesterday = moment().subtract(3, 'days');
            }else{
                yesterday = moment().subtract(1, 'days');
            }
            symbols.forEach((symbol, idx) => {
                debugger
                let sharesAmt = this.props.transactions[symbol].shares
                let individualCompany = data[symbol].chart;
                let filterIndividualCompanyArray = individualCompany.filter(ele => {
                    return moment(ele.date).isSame(yesterday, 'day') //will only return the date that is the day as today
                })
                
                // debugger
                filterIndividualCompanyArray.forEach((ele, idx) => {
                    // debugger
                    if (dataArray[idx] === undefined) {
                        dataArray[idx] = [((ele.close  * sharesAmt) + userBalance), ele.minute];
                    } else {
                        dataArray[idx][0] += (ele.close * sharesAmt)
                    }
                })

            })
//ONE DAY VIEW/WEEKEND
        } else if (this.state.dateViewed === '1d' && isWeekend){
            if (dayOfWeek === 0) { //SUNDAY
                yesterday = moment().subtract(2, 'days');
            } else {
                yesterday = moment().subtract(1, 'days');
            }
            symbols.forEach((symbol, idx) => {
                
                // debugger
                let sharesAmt = this.props.transactions[symbol].shares
                let individualCompany = data[symbol].chart;
                let filterIndividualCompanyArray = individualCompany.filter(ele => {
                    return moment(ele.date).isSame(yesterday, 'day') //will only return the date that is the day as today
                })
                // debugger
                let subdata = filterIndividualCompanyArray.forEach( (ele,idx) => {
                    // debugger
                    
                    if (dataArray[idx] === undefined) {
                        dataArray[idx] = (ele.close * sharesAmt);
                    } else {
                        dataArray[idx] += (ele.close * sharesAmt);
                    }
                })

            })
//ONE WEEK VIEW
        } else if (this.state.dateViewed === '1w') {//ONE WEEK VIEW
            symbols.forEach((symbol, idx) => {
                // let lastWeek = moment().subtract(1, 'weeks')
                // debugger
                let sharesAmt = this.props.transactions[symbol].shares
                let individualCompany = data[symbol].chart;
                // let filterIndividualCompanyArray = individualCompany.filter(ele => {
                //     return moment(ele.date).isAfter(lastWeek, 'weeks') //will only return the date that is the day as today
                // })
                // debugger
                let subdata = individualCompany.forEach((ele, idx) => {
                    // debugger

                    if (dataArray[idx] === undefined) {
                        dataArray[idx] = [((ele.close * sharesAmt) + userBalance), ele.minute];
                    } else {
                        dataArray[idx][0] += (ele.close * sharesAmt)
                    }
                })

            })
//ONE MONTH VIEW

        } else if (this.state.dateViewed === '1m') {//ONE MONTH VIEW
            symbols.forEach((symbol, idx) => {
                let lastMonth = moment().subtract(1, 'months') //get last month's date
                // debugger
                let sharesAmt = this.props.transactions[symbol].shares
                let individualCompany = data[symbol].chart;
                let filterIndividualCompanyArray = individualCompany.filter(ele => {
                    return moment(ele.date).isAfter(lastMonth) //will only return the date that is the day as today
                })
                // debugger
                let subdata = filterIndividualCompanyArray.forEach((ele, idx) => {
                    // debugger

                    if (dataArray[idx] === undefined) {
                        dataArray[idx] = [((ele.close * sharesAmt) + userBalance), ele.minute];
                    } else {
                        dataArray[idx][0] += (ele.close * sharesAmt)
                    }
                })

            })
//THREE MONTH VIEW

        } else if (this.state.dateViewed === '3m') {//ONE MONTH VIEW
            symbols.forEach((symbol, idx) => {
                let lastThreeMonth = moment().subtract(3, 'months') //get last month's date
                // debugger
                let sharesAmt = this.props.transactions[symbol].shares
                let individualCompany = data[symbol].chart;
                let filterIndividualCompanyArray = individualCompany.filter(ele => {
                    return moment(ele.date).isAfter(lastThreeMonth) //will only return the date that is the day as today
                })
                // debugger
                let subdata = filterIndividualCompanyArray.forEach((ele, idx) => {
                    // debugger

                    if (dataArray[idx] === undefined) {
                        dataArray[idx] = [((ele.close * sharesAmt) + userBalance), ele.date];
                    } else {
                        dataArray[idx][0] += (ele.close * sharesAmt)
                    }
                })

            })
//ONE YEAR VIEW

        } else if (this.state.dateViewed === '1y') {//ONE MONTH VIEW
            symbols.forEach((symbol, idx) => {
                let oneYrAgo = moment().subtract(1, 'years') //get last year's  date
                // debugger
                let sharesAmt = this.props.transactions[symbol].shares
                let individualCompany = data[symbol].chart;
                let filterIndividualCompanyArray = individualCompany.filter(ele => {
                    return moment(ele.date).isAfter(oneYrAgo) //will only return the date that is the day as today
                })
                // debugger
                let subdata = filterIndividualCompanyArray.forEach((ele, idx) => {
                    // debugger

                    if (dataArray[idx] === undefined) {
                        dataArray[idx] = [((ele.close * sharesAmt) + userBalance), ele.date];
                    } else {
                        dataArray[idx][0] += (ele.close * sharesAmt)
                    }
                })

            })
//FIVE YEAR VIEW

        } else if (this.state.dateViewed === '5y') {//ONE MONTH VIEW
            symbols.forEach((symbol, idx) => {
                // let fiveYrAgo = moment().subtract(5, 'years') //get last 5 year's  date
                // debugger
                let sharesAmt = this.props.transactions[symbol].shares
                let individualCompany = data[symbol].chart;
                // let filterIndividualCompanyArray = individualCompany.filter(ele => {
                //     return moment(ele.date).isAfter(oneYrAgo) //will only return the date that is the day as today
                // })
                // debugger
                let subdata = individualCompany.forEach((ele, idx) => {
                    // debugger

                    if (dataArray[idx] === undefined) {
                        dataArray[idx] = [((ele.close * sharesAmt) + userBalance), ele.date];
                    } else {
                        dataArray[idx][0] += (ele.close * sharesAmt)
                    }
                })

            })
        }
        // console.log(dataArray)

        let test = dataArray.map( (ele,idx) => {
            // debugger
            let rObj = {}
            rObj['PortfolioValue'] = ele[0].toFixed(2);
            if (this.state.dateViewed === '1d'){
                rObj['time'] = `${ele[1]} ET`;
            }else{
                rObj['time'] = ele[1];
            }
            return rObj
        })
        // console.log(test)
        if (this.state.dateViewed === '5y') {
        test = test.slice().reverse()
        } 
        

        return (this.renderReCharts(test))


    }

    renderReCharts(data) {
        let color;
        let gainLoss;
        let gainLossPercentage;
        gainLoss = data.slice(-1)[0].PortfolioValue - data[0].PortfolioValue;
        gainLossPercentage = numeral(gainLoss / data[0].PortfolioValue).format('0.00%');
        if (gainLoss >= 0) {
            color = '#21ce99'
        } else {
            color = '#FF0000'
        }
        debugger
        return(
            <LineChart width={800} height={300} data={data} 
            // margin={{top: 100, right: 30, left: 20, bottom: 100,}}
            >
                <XAxis dataKey="time" hide={true} />
                <YAxis domain={['dataMin', 'dataMax']} axisLine={false} hide={true} />
                <Tooltip 
                    position={{ y: 0 }}
                    // offset={toolTipOffSet}
                    isAnimationActive={false}
                    // content={this.customToolTip}
                    wrapperStyle={{ top: -15 }}/>
                {/* <Legend /> */}
                <Line type="linear" dataKey="PortfolioValue" stroke={color} dot={false} strokeWidth={2} />
            </LineChart>
        )
    }

    totalPortfolioValue() {
        debugger
        if (Object.keys(this.props.prices).length === 0){
            return 0;
        }
        let totalValue = 0;
        let symbols = Object.keys(this.props.transactions)
        symbols.forEach( (symbol) => {
            debugger
            if(this.props.transactions[symbol].shares !==0){
                debugger
            let subValue = this.props.transactions[symbol].shares * this.props.prices[symbol];
            totalValue = totalValue + subValue
            }
        },this)
        return(
            totalValue
        )
    }

    render() {
        debugger
        return (
            <div>
                <h1>
                    {numeral(this.props.currentUser.balance + this.totalPortfolioValue()).format('$0,0.00')}
                </h1>
                {this.graphDataCalculation()}
                <ul className="Stock-Date-View-Option_container">
                    <h2 onClick={() => this.changeDateView("1d")} className="Stock-Data-View-Button 1d underlined">1D</h2>
                    <h2 onClick={() => this.changeDateView("1w")} className="Stock-Data-View-Button 1w">1W</h2>
                    <h2 onClick={() => this.changeDateView("1m")} className="Stock-Data-View-Button 1m">1M</h2>
                    <h2 onClick={() => this.changeDateView("3m")} className="Stock-Data-View-Button 3m">3M</h2>
                    <h2 onClick={() => this.changeDateView("1y")} className="Stock-Data-View-Button 1y">1Y</h2>
                    <h2 onClick={() => this.changeDateView("5y")} className="Stock-Data-View-Button 5y">5Y</h2>
                </ul>
            </div>
        );
    }
}


export default Graph;


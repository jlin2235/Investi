import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

class ShowPageGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateViewed: '1d',
            data: []
        }

        this.renderReCharts = this.renderReCharts.bind(this);
        this.graphDataCalculation = this.graphDataCalculation.bind(this);
        this.changeDateView = this.changeDateView.bind(this);
        this.gainLoss = this.gainLoss.bind(this);
        this.gainLossPercentage = this.gainLossPercentage.bind(this);
        this.stockValue = this.stockValue.bind(this);
        this.mouseHover = this.mouseHover.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    changeDateView(newDate) {
        this.setState({dateViewed: newDate});
        this.changeDateViewUnderlines(newDate)

    }

    changeDateViewUnderlines(newDate) {
        debugger
        let timeFrames = Array.prototype.slice.call(document.getElementsByClassName('Stock-Data-View-Button'));
        debugger
        timeFrames.forEach(ele => {
            debugger
            let classListOfElement = Array.prototype.slice.call(ele.classList);
            ele.classList.remove('underlined');
            if (classListOfElement.includes(newDate)) {
                debugger
                ele.classList.add('underlined');
            }
        })
    }
    

    graphDataCalculation() {
         

        if ((this.props.graphPrices['fiveMin'] === undefined) ||
            (this.props.graphPrices['thirtyMin'] === undefined) ||
            (this.props.graphPrices['fiveYr'] === undefined)
        ){
           return null;
       }
       let data;

       if (this.state.dateViewed === '1d') {
           data = this.props.graphPrices['fiveMin']
       } else if (this.state.dateViewed === '1w'){
           data = this.props.graphPrices['thirtyMin']
       }else {
           data = this.props.graphPrices['fiveYr']
       }
       //FILTER INCOMING DATA ONLY WORK FOR HOURS THE MARKET IS OPEN SO FAR
       let todayDate = new Date(); //Tue Sep 22 2020 17:37:01 GMT-0400 (Eastern Daylight Time)
       let dayOfWeek = todayDate.getDay(); //2
       let isWeekend = ((dayOfWeek === 0) || (dayOfWeek === 6)) //SUN/SAT

       if (this.state.dateViewed === '1d' && !isWeekend) { //ONE DAY VIEW/WEEKDAY
             
            let filterData = data.filter( ele => {
                return moment(ele.date.split(" ")[0]).isSame(todayDate, 'day') //will only return the date that is the day as today
            })
           data = filterData.slice().reverse(); //copy the data and the reverse it for the graph
       } else if(this.state.dateViewed === '1w'){ //ONE WEEK VIEW
             
            let filterData = data.filter(ele => {
                let lastWeek = moment().subtract(1, 'weeks') //get last week's date
                return moment(ele.date.split(" ")[0]).isAfter(lastWeek) //Check if ele is after "lastweek"
            })
            data = filterData.slice().reverse()
       } else if (this.state.dateViewed === '1m'){ //ONE MONTH VIEW
             
            let filterData = data.filter(ele => {
               let lastMonth = moment().subtract(1, 'months') //get last month's date
               return moment(ele.date.split(" ")[0]).isAfter(lastMonth) //Check if ele is after "lastMonth"
           })
           data = filterData.slice().reverse()
       } else if (this.state.dateViewed === '3m'){ //3 MONTH VIEW
             
            let filterData = data.filter(ele => {
               let lastThreeMonth = moment().subtract(3, 'months') //get last 3 month's  date
               return moment(ele.date.split(" ")[0]).isAfter(lastThreeMonth) //Check if ele is after "lastThreeMonth"
           })
           data = filterData.slice().reverse()
       } else if (this.state.dateViewed === '1y') { // 1 YEAR VIEW
             
            let filterData = data.filter(ele => {
                let oneYrAgo = moment().subtract(1, 'years') //get last year's  date
                return moment(ele.date.split(" ")[0]).isAfter(oneYrAgo)
            })
           data = filterData.slice().reverse()
       } else if (this.state.dateViewed === '5y') { // 5 YEAR VIEW
             
            let filterData = data.filter(ele => {
               let fiveYrAgo = moment().subtract(5, 'years') //get last 5 year's  date
               return moment(ele.date.split(" ")[0]).isAfter(fiveYrAgo)
           })
           data = filterData.slice().reverse()
       }

        let needUpdate = this.state.data[0] ? this.state.data[0].close !== data[0].close : true
        if (needUpdate) {
            this.setState({ data: data });
        }

       return (this.renderReCharts(data))

   }


    renderReCharts(data) {
          
        return (
            <LineChart width={800} height={300} data={data}
                onMouseMove={this.mouseHover}
                onMouseLeave={this.mouseLeave}>

                <XAxis dataKey="date" padding={{ left: 30, right: 30 }} hide={true} />
                <YAxis domain={['dataMin', 'dataMax']} axisLine={false} hide={true} />
                <Tooltip
                    position={{ y: 0 }}
                    isAnimationActive={false}
                    wrapperStyle={{ top: -15 }} />
                <Legend />
                <Line type="linear" dataKey="close" stroke="#8884d8" dot={false} strokeWidth={2} />
            </LineChart>

        )
    }
    gainLoss() {
        if (this.state.data[0] === undefined) {
            return null
        }
        let data = this.state.data
        let gainLoss;
        gainLoss = data.slice(-1)[0].close - data[0].close;

        if (gainLoss > 0) {
            gainLoss = numeral(gainLoss).format('$0,0.00');
            gainLoss = `+${gainLoss.toString()}`;
        } else {
            gainLoss = numeral(gainLoss).format('$0,0.00')
        }
        return numeral(gainLoss).format('$0,0.00');
    }

    gainLossPercentage() {
        if (this.state.data[0] === undefined) {
            return null
        }
        let data = this.state.data
        let gainLoss;
        let gainLossPercentage;
        gainLoss = data.slice(-1)[0].close - data[0].close;
        gainLossPercentage = numeral(gainLoss / data[0].close).format('0.00%');

        if (gainLoss > 0) {
            gainLossPercentage = numeral(gainLossPercentage).format('0.00%');
            gainLossPercentage = `(+${gainLossPercentage.toString()})`;
        } else {
            gainLossPercentage = `(${numeral(gainLossPercentage).format('0.00%')})`;
        }

        return gainLossPercentage
    }

    stockValue() {
        if (this.state.data[0] === undefined) {
            return null
        }

        return this.state.data.slice(-1)[0].close
    }

    mouseHover(e) {
        if (!e.activePayload) return null;
        let currentBalance = document.getElementById('current-balance');
        let gainLoss = document.getElementById("home-page-gainLoss-container");
        let gainLossPercentage = document.getElementById('home-page-gainLossPercentage-container');

        currentBalance.textContent = numeral(e.activePayload[0].payload.close).format('$0,0.00')
        let totalStockValue = this.stockValue();
        let hoverPrice = e.activePayload[0].payload.close;
        let hoverDifference = totalStockValue - e.activePayload[0].payload.close;
        let hoverPercentage = hoverDifference / hoverPrice;
        if (hoverDifference > 0) {
            hoverDifference = numeral(hoverDifference).format('$0,0.00');
            hoverPercentage = numeral(hoverPercentage).format('0.00%');
            hoverDifference = `+${hoverDifference.toString()}`;
            hoverPercentage = `(+${hoverPercentage.toString()})`;
        } else {
            hoverPercentage = `(${numeral(hoverPercentage).format('0.00%')})`;
            hoverDifference = numeral(hoverDifference).format('$0,0.00')
        }
        gainLoss.textContent = hoverDifference;
        gainLossPercentage.textContent = hoverPercentage

    }

    mouseLeave(e) {
        let currentBalance = document.getElementById('current-balance');
        let gainLoss = document.getElementById("home-page-gainLoss-container");
        let gainLossPercentage = document.getElementById('home-page-gainLossPercentage-container');

        let totalStockValue = this.stockValue();
        currentBalance.textContent = numeral(totalStockValue).format('$0,0.00');
        let gainLossPercentageValue = this.gainLossPercentage();
        let gainLossValue = this.gainLoss();

        if (gainLossValue > 0) {
            gainLossValue = numeral(gainLossValue).format('$0,0.00');
            gainLossPercentageValue = numeral(gainLossPercentageValue).format('0.00%');
            gainLossValue = `+${gainLossValue.toString()}`;
            gainLossPercentageValue = `(+${gainLossPercentageValue.toString()})`;
        } else {
            gainLossPercentageValue = `(${numeral(gainLossPercentageValue).format('0.00%')})`;
            gainLossValue = numeral(gainLossValue).format('$0,0.00')
        }
        gainLoss.textContent = gainLossValue;
        gainLossPercentage.textContent = gainLossPercentageValue
    }



    render() {
          
        return (
            <div>
                <h1 id='profile-company-name'>
                    {this.props.profile.companyName}
                </h1>
                <h2 id='current-balance'>
                    {numeral(this.stockValue()).format('$0,0.00')}
                </h2>
                <div className="home-page-gainLoss-gainLossPercentage-container">
                    <p id="home-page-gainLoss-container">{this.gainLoss()}</p>
                    <p id="home-page-gainLossPercentage-container">{this.gainLossPercentage()}</p>
                </div>
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


export default ShowPageGraph;
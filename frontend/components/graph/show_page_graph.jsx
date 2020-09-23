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
            dateViewed: '1d'
        }

        this.renderReCharts = this.renderReCharts.bind(this);
        this.graphDataCalculation = this.graphDataCalculation.bind(this);
        this.changeDateView = this.changeDateView.bind(this);
    }

    changeDateView(newDate) {
        this.setState({dateViewed: newDate})
    }
    

    graphDataCalculation() {
       debugger

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
           debugger
            let filterData = data.filter( ele => {
                return moment(ele.date.split(" ")[0]).isSame(todayDate, 'day') //will only return the date that is the day as today
            })
           data = filterData.slice().reverse(); //copy the data and the reverse it for the graph
       } else if(this.state.dateViewed === '1w'){ //ONE WEEK VIEW
           debugger
            let filterData = data.filter(ele => {
                let lastWeek = moment().subtract(1, 'weeks') //get last week's date
                return moment(ele.date.split(" ")[0]).isAfter(lastWeek) //Check if ele is after "lastweek"
            })
            data = filterData.slice().reverse()
       } else if (this.state.dateViewed === '1m'){ //ONE MONTH VIEW
           debugger
            let filterData = data.filter(ele => {
               let lastMonth = moment().subtract(1, 'months') //get last month's date
               return moment(ele.date.split(" ")[0]).isAfter(lastMonth) //Check if ele is after "lastMonth"
           })
           data = filterData.slice().reverse()
       } else if (this.state.dateViewed === '3m'){ //3 MONTH VIEW
           debugger
            let filterData = data.filter(ele => {
               let lastThreeMonth = moment().subtract(3, 'months') //get last 3 month's  date
               return moment(ele.date.split(" ")[0]).isAfter(lastThreeMonth) //Check if ele is after "lastThreeMonth"
           })
           data = filterData.slice().reverse()
       } else if (this.state.dateViewed === '1y') { // 1 YEAR VIEW
           debugger
            let filterData = data.filter(ele => {
                let oneYrAgo = moment().subtract(1, 'years') //get last year's  date
                return moment(ele.date.split(" ")[0]).isAfter(oneYrAgo)
            })
           data = filterData.slice().reverse()
       } else if (this.state.dateViewed === '5y') { // 5 YEAR VIEW
           debugger
            let filterData = data.filter(ele => {
               let fiveYrAgo = moment().subtract(5, 'years') //get last 5 year's  date
               return moment(ele.date.split(" ")[0]).isAfter(fiveYrAgo)
           })
           data = filterData.slice().reverse()
       }

       return (this.renderReCharts(data))

   }

//    gainLossCalculation(data){
//        if ((this.props.graphPrices['fiveMin'] === undefined) ||
//            (this.props.graphPrices['thirtyMin'] === undefined) ||
//            (this.props.graphPrices['fiveYr'] === undefined)
//        ) {
//            return null;
//        }



//    }


    renderReCharts(data) {
        debugger
        // this.graphDataCalculation()
        // if (data === undefined){
        //     return null;
        // }
        return (
            <LineChart width={800} height={300} data={data}>
                <XAxis dataKey="date" padding={{ left: 30, right: 30 }} hide={true} />
                <YAxis domain={['dataMin', 'dataMax']} axisLine={false} hide={true} />
                <Tooltip
                    position={{ y: 0 }}
                    // offset={toolTipOffSet}
                    isAnimationActive={false}
                    // content={this.customToolTip}
                    wrapperStyle={{ top: -15 }} />
                <Legend />
                {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                <Line type="linear" dataKey="close" stroke="#8884d8" dot={false} strokeWidth={2} />
            </LineChart>

        )
    }



    render() {
        debugger
        return (
            <div>
                <h1>
                    {this.props.profile.companyName}
                </h1>
                <h2>
                    {numeral(this.props.price).format('$0,0.00')}
                </h2>
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
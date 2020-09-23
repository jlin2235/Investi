import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

// const data = [
//     {
//         name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//     },
//     {
//         name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//     },
//     {
//         name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//     },
//     {
//         name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//     },
//     {
//         name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//     },
//     {
//         name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//     },
//     {
//         name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//     },
// ];

// const oneDayData = this.props.currentUser.balance

class ShowPageGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateViewed: '1d'
        }

        this.renderReCharts = this.renderReCharts.bind(this);
        this.graphDataCalculation = this.graphDataCalculation.bind(this);

    }

   graphDataCalculation() {
       debugger

       if (this.props.graphPrices.length === 0 ){
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
       } 

       return (this.renderReCharts(data))

   }


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
                {this.graphDataCalculation()}
            </div>
        );
    }
}


export default ShowPageGraph;
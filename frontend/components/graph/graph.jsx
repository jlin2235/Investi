import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

class Graph extends React.Component {

    constructor(props) {
        super(props);

        this.totalPortfolioValue = this.totalPortfolioValue.bind(this)
        this.renderReCharts = this.renderReCharts.bind(this);
    }

    componentDidMount() {
        debugger
        let transaction = {
            user_id: this.props.currentUser.id
        }
        this.props.getAllTransaction(transaction)
    }


    renderReCharts() {
        return(
            <LineChart width={800} height={300} data={data}>
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} hide={true} />
                <YAxis axisLine={false} hide={true}/>
                <Tooltip 
                    position={{ y: 0 }}
                    // offset={toolTipOffSet}
                    isAnimationActive={false}
                    // content={this.customToolTip}
                    wrapperStyle={{ top: -15 }}/>
                <Legend />
                {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                <Line type="linear" dataKey="uv" stroke="#8884d8" dot={false} strokeWidth={2} />
            </LineChart>
        )
    }

    totalPortfolioValue() {
        debugger
        let totalValue = 0;
        let symbols = Object.keys(this.props.transactions)
        // symbols.forEach( (symbol, idx) => {
        //     let subValue = this.props.transactions(symbol).shares 
        // })
        return(
            null
        )
    }

    render() {
        debugger
        return (
            <div>
                <h1>
                    {this.totalPortfolioValue()}
                    {numeral(this.props.currentUser.balance).format('$0,0.00')}
                </h1>
                {this.renderReCharts()}
            </div>
        );
    }
}


export default Graph;
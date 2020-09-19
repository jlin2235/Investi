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

const oneDayData = this.props.currentUser.balance

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
            .then(transactions => {
                debugger
                let symbolsArray = Object.keys(transactions.transactions);
                this.props.receivePrices(symbolsArray);
            })
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
                {this.renderReCharts()}
            </div>
        );
    }
}


export default Graph;

//TO BE DELETED

// https://sandbox.iexapis.com/stable/stock/market/batch?&types=price&symbols=aapl,fb,tsla&token=Tpk_618155a9bbe14250b43757d057e3ac43


// https://financialmodelingprep.com/api/v3/quote-short/T,UBER?apikey=cc43006d394343f06df55878f36afb50
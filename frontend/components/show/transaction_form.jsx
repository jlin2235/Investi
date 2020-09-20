import React from 'react';
import numeral from 'numeral'

class TransactionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quantity: '',
            cost: 0,
            buyOrSell: 'SELL',
            balance: this.props.currentUser.balance 
        }

        this.estimatedCost = this.estimatedCost.bind(this);
        this.buyingPowerMessage = this.buyingPowerMessage.bind(this);
    }

    componentDidMount(){
        debugger
        this.props.receiveProfile(this.props.symbol);
        // this.props.receivePrices(this.props.symbol);
        let transaction = {
            user_id: this.props.currentUser.id,
            symbol: this.props.symbol
        }
        this.props.receivePrice(this.props.symbol)
        // this.props.getAllTransaction(transaction)
        this.props.getOneTran(transaction)
    }

    estimatedCost() {
        debugger
        if(this.props.transactions.length === 0){
            return null;
        }
        return(
        this.props.transactions[this.props.profile.symbol].shares * this.props.prices
        )
    }

    buyingPowerMessage() {
        debugger
        let BPMessage = '';
        if (this.props.transactions.length === 0) {
            return null;
        }

        if (this.state.buyOrSell === 'BUY'){
            BPMessage = `Buying Power: ${numeral(this.props.currentUser.balance).format('$0,0.00')}`
        } else {
            if (this.props.transactions[this.props.profile.symbol] === undefined){
                BPMessage = '0 Shares Available'
            }else{
                BPMessage = `${numeral(this.props.transactions[this.props.symbol].shares).format('0,0')} shares available`
            }
        }
        return (
            BPMessage
        )
    }


    render(){

        debugger
        return(
            <form className='transaction-form-main-container'>
                <div className='buy-sell-button-container'>
                    <h1 id='selected-default'>Buy</h1>
                    <h1>Sell</h1>
                </div>
                <div className='shares-amt-container'>
                    <label>Shares:</label>
                    <input type="number"
                        value={this.state.quantity}
                        placeholder={0}
                        min='0'
                    />
                </div>
                <div className='transaction-price-cost-container'>
                    <div className="transaction-price-details">
                        <p>Market Price: </p>
                        <p>{numeral(this.props.prices).format('$0,0.00')}</p>
                    </div>
                    <div className="transaction-price-details">
                        <p>Estimated Cost:</p>
                        <p>{numeral(this.estimatedCost()).format('$0,0.00')}</p>
                    </div>
                </div>
                <div className='transaction-submit-main-container'>
                    <input id='submit-button' type="submit" value={this.state.buyOrSell}/>
                    <p className='buying-power-message' >{this.buyingPowerMessage()}</p>
                </div>

            </form>
        )
    }

}

export default TransactionForm;


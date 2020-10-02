import React from 'react';
import numeral from 'numeral'

class TransactionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quantity: '',
            cost: 0,
            buyOrSell: 'BUY',
            balance: this.props.currentUser.balance 
        }
        this.renderErrors = this.renderErrors.bind(this)
        this.buyingPowerMessage = this.buyingPowerMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount(){
         
        let transaction = {
            user_id: this.props.currentUser.id,
            symbol: this.props.symbol
        }
        this.props.getOneTran(transaction)
        // this.props.receiveProfile(this.props.symbol);
        // this.props.receivePrices(this.props.symbol);
        // this.props.receivePrice(this.props.symbol)
        // this.props.getAllTransaction(transaction)
    }

    update(field) {
        return e => {
            let cost = 0;
            if (e.currentTarget.value === ''){
                cost = 0;
            }else {
                cost = parseInt(e.currentTarget.value) * this.props.prices
            }//CAN"T USE parseFloat NEED TO BE ROUNDED "ESTIMATED COST"

            this.setState({
                [field]: parseInt(e.currentTarget.value),
                cost: cost
            })
        }
    }



    buyingPowerMessage() {
         
        let BPMessage = '';
        if (this.props.transactions.length === 0) {
            BPMessage = '0 Shares Available'
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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
         
        const transaction = {
            purchase_price: this.state.cost,
            shares: this.state.quantity,
            user_id: this.props.currentUser.id,
            symbols: this.props.symbol
        }
        if(transaction.quantity === '') return null; // if the user just click sumbit for fun
        
        //BUY
        if(this.state.buyOrSell === 'BUY') {
             
            transaction['balance'] = this.props.currentUser.balance - this.state.cost;
            this.props.updateUserBal(transaction);
            this.props.createTransaction(transaction)
                
        }else { //SELL
            transaction['balance'] = this.props.currentUser.balance + this.state.cost;
            transaction.quantity = transaction.quantity * (-1); // negative because of sell
            this.props.updateUserBal(transaction);
            this.props.createTransaction(transaction); 
        }
        
    }


    render(){

         
        return(
            <form className='transaction-form-main-container' onSubmit={this.handleSubmit}>
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
                        onChange={this.update('quantity')}
                    />
                </div>
                <div className='transaction-price-cost-container'>
                    <div className="transaction-price-details">
                        <p>Market Price: </p>
                        <p>{numeral(this.props.prices).format('$0,0.00')}</p>
                    </div>
                    <div className="transaction-price-details">
                        <p>Estimated Cost:</p>
                        <p>{numeral(this.state.cost).format('$0,0.00')}</p>
                    </div>
                </div>
                <div className='transaction-submit-main-container'>
                    {this.renderErrors()}
                    <input id='submit-button' type="submit" value={this.state.buyOrSell}/>
                    <p className='buying-power-message' >{this.buyingPowerMessage()}</p>
                </div>

            </form>
        )
    }

}

export default TransactionForm;


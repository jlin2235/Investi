import React from 'react';
import numeral from 'numeral'

class TransactionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quantity: '',
            cost: 0,
            buyOrSell: 'BUY',
            balance: this.props.currentUser.balance,
            watchOrUnwatch: 'WATCH'
        }
        this.renderErrors = this.renderErrors.bind(this)
        this.buyingPowerMessage = this.buyingPowerMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeBuyOrSell = this.changeBuyOrSell.bind(this);
        this.changeBuyOrSellUnderlines = this.changeBuyOrSellUnderlines.bind(this);
        this.handleSubmitWatch = this.handleSubmitWatch.bind(this);

    }

    componentDidMount(){
         
        let transaction = {
            user_id: this.props.currentUser.id,
            symbol: this.props.symbol
        }
        let watchlist = {
            user_id: this.props.currentUser.id,
            symbol: this.props.symbol
        }
        this.props.getOneTran(transaction);
        this.props.getWatchList(watchlist)
            .then(response => {
                debugger
                if(response.watchlist.length === undefined){
                    this.setState({ watchOrUnwatch: 'UNWATCH'})
                }
            }) 
    }

    componentDidUpdate(previousProps) {
        let watchlist = {
            user_id: this.props.currentUser.id,
            symbol: this.props.symbol
        }
        debugger

        if (previousProps.symbol !== this.props.symbol) {
            this.props.getWatchList(watchlist)
                .then(response => {
                    debugger
                    if (response.watchlist.length === undefined) {
                        this.setState({ watchOrUnwatch: 'UNWATCH' })
                    }else{
                        this.setState({ watchOrUnwatch: 'WATCH' })

                    }
                }) 

        }
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
         debugger
        const transaction = {
            purchase_price: this.state.cost,
            shares: this.state.quantity,
            user_id: this.props.currentUser.id,
            symbols: this.props.symbol
        }
        if (transaction.shares === '') return null; // if the user just click sumbit for fun
        
        //BUY
        if(this.state.buyOrSell === 'BUY') {
            debugger
            transaction['balance'] = this.props.currentUser.balance - this.state.cost;
            this.props.updateUserBal(transaction);
            this.props.createTransaction(transaction)
                .then(response => {
                    debugger
                    if (response.transaction !== undefined){
                        this.props.receiveSuccessMessage()
                    }
                })
        }else { //SELL
            debugger
            transaction['balance'] = this.props.currentUser.balance + this.state.cost;
            transaction.shares = transaction.shares * (-1); // negative because of sell
            this.props.updateUserBal(transaction);
            this.props.createTransaction(transaction)
              .then(response => {
                  debugger
                  if (response.transaction !== undefined) {
                      this.props.receiveSuccessMessage()
                  }
              })
        }
        setTimeout(() => {
            this.props.clearTransErrors()
        }, 3000)
   
        
    }
    handleSubmitWatch(e) {
        e.preventDefault();
        debugger
        const watchList = {
            user_id: this.props.currentUser.id,
            symbols: this.props.symbol
        }        
        //WATCH
        if(this.state.watchOrUnwatch === 'WATCH') {
            debugger
            this.props.createWatch(watchList)
                .then(response => {
                    debugger
                    if (response.watchlist !== undefined){
                        debugger
                        this.setState({ watchOrUnwatch: 'UNWATCH' })
                    }
                })
        }else { //UNWATCH
            debugger
            this.props.deleteWatch(watchList)
              .then(response => {
                  debugger
                  if (response.watchlist !== undefined) {
                      this.setState({ watchOrUnwatch: 'MATCH' })

                  }
              })
        }
        setTimeout(() => {
            this.props.clearTransErrors()
        }, 3000)
   
        
    }

    changeBuyOrSell(value) {
        this.setState({ buyOrSell: value});
        this.changeBuyOrSellUnderlines(value);

    }

    changeBuyOrSellUnderlines(value) {
        let type = Array.prototype.slice.call(document.getElementsByClassName('transaction-type'));
        debugger
        type.forEach(ele => {
            debugger
            let classListOfElement = Array.prototype.slice.call(ele.classList);
            ele.classList.remove('selected-default');
            if (classListOfElement.includes(value)) {
                debugger
                ele.classList.add('selected-default');
            }
        }) 
    }




    render() {
        let color;
        if (this.props.errors.length !== 0) {
            if (this.props.errors[0] === 'not enough cash' ||
                this.props.errors[0] === 'transaction unable to be completed') {
                color = 'red'
            } else {
                color = 'green'
            }
        }
         
        return(
            <form className='transaction-form-main-container' onSubmit={this.handleSubmit}>
                <div className='buy-sell-button-container'>
                    <h1 className='transaction-type selected-default BUY' onClick={() => this.changeBuyOrSell('BUY')}>Buy</h1>
                    <h1 className='transaction-type SELL' onClick={() => this.changeBuyOrSell('SELL')}>Sell</h1>
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
                    <div id={color}>
                        {this.renderErrors()}
                    </div>
                    <input id='submit-button' type="submit" value={this.state.buyOrSell}/>
                    <p className='buying-power-message' >{this.buyingPowerMessage()}</p>
                    <button id='submit-button-watch'  onClick={this.handleSubmitWatch}>{this.state.watchOrUnwatch}</button>
                </div>
                    {/* <form onSubmit={this.handleSubmitWatch}>
                        <input id='submit-button-watch' type="submit" value={this.state.watchOrUnwatch} />
                    </form> */}
            </form>
        )
    }

}

export default TransactionForm;


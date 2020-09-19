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
    }



    render(){


        return(
            <form>
                <div>
                    <h1>Buy</h1>
                    <h1>Sell</h1>
                </div>
                <div>
                    <label>Shares:
                        <input type="number"
                                value={this.state.quantity}
                                placeholder={0}
                                min='0'
                        />
                    </label>
                </div>
            </form>
        )
    }

}

export default TransactionForm;
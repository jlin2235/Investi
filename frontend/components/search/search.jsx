import React from 'react';
import ShowContainer from './../show/show_container'
import { Link } from 'react-router-dom'
import { withRouter } from'react-router'


class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchvalue: ''
        }
        this.pressEnterKey = this.pressEnterKey.bind(this);
        this.filterSuggestions = this.filterSuggestions.bind(this);
    }

    // Whenever the searchbar gets mounted it will fetch the stocks from the API
    componentDidMount() {
        this.props.receiveStocks();
    }

   

    filterSuggestions(){
        let suggestions = [];
        let companies = Object.values(this.props.stocks); //Change it into an array
        let userInoutUpperCase = this.state.searchvalue.toUpperCase();

        if(userInoutUpperCase.length > 0) {
            companies.forEach((company, idx) =>{
                if(company.symbol.includes(userInoutUpperCase) || 
                    (company.name !== null && company.name.toUpperCase().includes(userInoutUpperCase))){
                        suggestions.push(
                            <div key={idx}>
                                <Link to={`/home/${company.symbol}`} replace className="suggestion-item-link">
                                    <div className="suggestion-item">
                                        <p id='suggestion-box-symbol-results'>{company.symbol}</p>
                                        <p>{company.name}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    }

            })
        }

        suggestions = suggestions.slice(0, 5)
        if (this.props.stocks[userInoutUpperCase]){
            suggestions[0] = 
            (
            <div key={10000000}>
                    <Link to={`/home/${this.props.stocks[userInoutUpperCase].symbol}`} replace className="suggestion-item-link">
                        <li className="suggestion-item"> 
                            <p id='suggestion-box-symbol-results'>{this.props.stocks[userInoutUpperCase].symbol}</p>
                            <p>{this.props.stocks[userInoutUpperCase].name}</p>
                        </li>
                    </Link>
            </div>
            )
        }

        return suggestions;
    }



    update(field) {
        return e => {this.setState({[field]: e.currentTarget.value})}
    }

    pressEnterKey(e){
        // e.preventDefault();
        //  
        debugger
        switch(e.keyCode){
            case 13: //ENTER KEY
                debugger
                const symbol = e.currentTarget.value
                const dupSymbol = symbol.slice();
                this.props.receiveProfile(dupSymbol)
                this.props.history.push(`/home/${dupSymbol}`) 
                // this.props.receiveProfile(dupSymbol)
                //     .then(() => { this.props.history.push(`/home/${dupSymbol}`)})
            default:
                return null;
        }
    }


    render(){
        //  
        let suggestions = this.filterSuggestions();
        return(
            <div>
                <form className='search-form-container'>
                    <input
                        type="search"
                        placeholder='Search'
                        className='Search-Bar-Input-Field'
                        // value={this.state.searchvalue}
                        onChange={this.update("searchvalue")}
                        onKeyDown={this.pressEnterKey}
                    />
                    <ul className="suggestion-box">
                        {suggestions}
                    </ul>
                </form>

            </div>
        )
    }
}

export default withRouter(SearchBar);
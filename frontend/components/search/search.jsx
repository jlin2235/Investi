import React from 'react';
import ShowContainer from './../show/show_container'
import { Link } from 'react-router-dom'
import { withRouter } from'react-router'
// import ShowContainer from './../show/show_container';


class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchvalue: ''
        }
        this.pressEnterKey = this.pressEnterKey.bind(this);
    }

    update(field) {
        return e => {this.setState({[field]: e.currentTarget.value})}
    }

    pressEnterKey(e){
        // e.preventDefault();
        // debugger
        switch(e.keyCode){
            case 13: //ENTER KEY
                debugger
                const symbol = e.currentTarget.value
                const dupSymbol = symbol.slice();
                this.props.receiveProfile(dupSymbol)
                    .then(() => { this.props.history.push(`/home/${dupSymbol}`)})
                //ajax request 
                // <Link to="/login">Account</Link>
                // debugger
                // <ShowContainer />
                // this.props.history.push(`/home/${e.currentTarget}`)

            default:
                return null;
        }
    }


    render(){
        // debugger
        return(
            <div>
                <form>
                    <input
                        type="search"
                        placeholder='Search'
                        className='Search-Bar-Input-Field'
                        // value={this.state.searchvalue}
                        onChange={this.update("searchvalue")}
                        onKeyDown={this.pressEnterKey}
                    />
                </form>

            </div>
        )
    }
}

export default withRouter(SearchBar);
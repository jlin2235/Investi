import React from 'react';
// import ShowContainer from './../show/show_container'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
// import ShowContainer from './../show/show_container';


class NEWS extends React.Component {
    constructor(props) {
        super(props)
      

    }
    componentDidMount(){
         
        this.props.receivenews();
    }

   

    displayNews() {
         
        return (
            this.props.news.map((newsarticle,idx)(
                <li>
                    {newsarticle.source.name}
                </li>

            )))
    }

 


    render() {
         
        return (
            <div>
                <ul>
                    {this.displayNews()}
                </ul>

            </div>
        )
    }
}

export default withRouter(NEWS);
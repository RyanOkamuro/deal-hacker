import React from 'react';
import {BrowserRouter} from "react-router-dom";
// import {Route} from 'react-router-dom';

import './view-details.css';

export default class ViewDetails extends React.Component {
    detailsPage() {
        this.context.history.push("/detail-information/");
    }
    render() {
        return (
            <div>
                <button onClick={this.detailsPage} className="btn-details">{this.props.details}</button>
            </div>
// export default class ViewDetails extends React.Component {            
    // const Button = () => (
    //     <Route render={({history}) => (
    //         <button
    //             type="button"
    //             onClick={() => {history.push("/detail-information")}}
    //         >
    //         {this.props.details}
    //         </button>
    //     )} />
    // )

        )
    }
}
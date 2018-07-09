import React from 'react';

export default class ModifyButton extends React.Component {
    render() {
        return (
            <div>
                <Link to={"/details/detail-information/:product"}><button className="btn">{this.props.saleItem.details}</button></Link>
            </div>
        )
    }
}
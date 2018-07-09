import React from 'react';

import DealName from './deal-name';
import ViewDetails from './view-details';

import './deal-item.css';

export default class DealItem extends React.Component {
    render() {
        console.log(this.props);
        const saleItems = this.props.saleItems.map((saleItem, index) => (
            <div className="col-2" key={index}>
                <div className="box">
                    <DealName saleItem={saleItem} />
                    <ViewDetails saleItem={saleItem} />
                </div>
            </div>
        ));
        return (
            <section>
                <div className="row">
                    {saleItems}
                </div>
            </section>
        )
    }
}


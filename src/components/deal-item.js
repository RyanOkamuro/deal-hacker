import React from 'react';

import DealName from './deal-name';
import ViewDetails from './view-details';

import './deal-item.css';

export default class DealItem extends React.Component {
    render() {
        return (
            <section>
                <div className="row">
                    <div className="col-2">
                        <div class="box orange">
                            <DealName image={this.props.image} singleDeal={this.props.singleDeal} price={this.props.price} />
                            <ViewDetails details={this.props.details} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box blue">
                            <DealName image={this.props.image} singleDeal={this.props.singleDeal} price={this.props.price} />
                            <ViewDetails details={this.props.details} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box green">
                            <DealName image={this.props.image} singleDeal={this.props.singleDeal} price={this.props.price} />
                            <ViewDetails details={this.props.details} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box black">
                            <DealName image={this.props.image} singleDeal={this.props.singleDeal} price={this.props.price} />
                            <ViewDetails details={this.props.details} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box green">
                            <DealName image={this.props.image} singleDeal={this.props.singleDeal} price={this.props.price} />
                            <ViewDetails details={this.props.details} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box green">
                            <DealName image={this.props.image} singleDeal={this.props.singleDeal} price={this.props.price} />
                            <ViewDetails details={this.props.details} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


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
                        <div class="box">
                            <DealName image={this.props.image} singleDeal={this.props.singleDeal} price={this.props.price} imageClass={this.props.imageClass} seller={this.props.seller} />
                            <ViewDetails details={this.props.details} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box">
                            <DealName image={this.props.image} singleDeal={this.props.singleDeal} price={this.props.price} imageClass={this.props.imageClass} seller={this.props.seller} />
                            <ViewDetails details={this.props.details} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box">
                            <DealName image={this.props.image} singleDeal={this.props.singleDeal} price={this.props.price} imageClass={this.props.imageClass} seller={this.props.seller} />
                            <ViewDetails details={this.props.details} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box">
                            <DealName image={this.props.image} singleDeal={this.props.singleDeal} price={this.props.price} imageClass={this.props.imageClass} seller={this.props.seller} />
                            <ViewDetails details={this.props.details} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box">
                            <DealName image={this.props.image} singleDeal={this.props.singleDeal} price={this.props.price} imageClass={this.props.imageClass} seller={this.props.seller} />
                            <ViewDetails details={this.props.details} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="box">
                            <DealName image={this.props.image} singleDeal={this.props.singleDeal} price={this.props.price} imageClass={this.props.imageClass} seller={this.props.seller} />
                            <ViewDetails details={this.props.details} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


import React from 'react';

// import Comments from './comments';

export default class DetailInformation extends React.Component {
    render() {
        console.log(this.props);
        const { match } = this.props;
        const { params } = match;
        const { product } = params;
        return (
            <div className="product-information">
                <h2> hi </h2>
                {/* <Comments /> */}
            </div>
        );
    }
}

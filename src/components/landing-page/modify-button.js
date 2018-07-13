import React from 'react';
import {Link} from 'react-router-dom';

export default class ModifyButton extends React.Component {
    render() {
        return (
            <div>
                <Link to={"/details/detail-information/:product"}><p className="edit-button">Edit</p></Link>
            </div>
        )
    }
}
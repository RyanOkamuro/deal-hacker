import React from 'react';

import './home.css';

export default class Home extends React.Component {
    render() {
        const 
        return (
            <div className="home-page">
                <h2>Find </h2>
                    <form onSubmit={e => this.goToBoard(e)}>
                        <input type="text" value={this.slugify(this.state.text)}
                            onChange={e => this.setText(e.target.value)} />
                        <button>Go to board</button>
                    </form>
            </div>
        );
    }
}
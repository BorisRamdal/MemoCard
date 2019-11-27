import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './card.css';

class Card extends Component {
    state = {
        open: false
    };

    showTranslate = () => {
        this.setState({
            open: !this.state.open
        });
    };
    render() {
        const {pathname} = this.props.location;
        return(
            <div className="card">
                <div className="title">{this.props.word}</div>
                <div className="trans-box">
                    <span onClick={this.showTranslate}>
                        {this.state.open ? this.props.translation : '?'}
                    </span>
                </div>
                {pathname === '/saved' ?
                    <button className="btn">Remove</button> :
                    <button className="btn">Add to List</button>
                }
            </div>
        )
    }
}

export default withRouter(Card);
import React, {Component} from 'react';
import './card.css';

export default class Card extends Component {
    state = {
        open: false
    };

    showTranslate = () => {
        this.setState({
            open: !this.state.open
        });
    };
    render() {
        return(
            <div className="card">
                <div className="counter">{this.props.counter}</div>
                <div className="title">{this.props.word}</div>
                <div className="trans-box">
                    <span onClick={this.showTranslate}>
                        {this.state.open ? this.props.translation : '?'}
                    </span>
                </div>
                <button className="btn">Add to List</button>
            </div>
        )
    }
}
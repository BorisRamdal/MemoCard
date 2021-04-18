import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './card.scss';

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
        const {word, translation, addtosave, removefromsave } = this.props;
        return(
            <div className="card">
                <div className="title">{word}</div>
                <div className="trans-box">
                    <span onClick={this.showTranslate}>
                        {this.state.open ? translation : '?'}
                    </span>
                </div>
                {pathname === '/saved' ?
                    <button className="btn" onClick={()=> removefromsave(word)}>Remove</button> :
                    <button className="btn" onClick={()=> addtosave(word, translation)}>Add to learned</button>
                }
            </div>
        )
    }
}

export default withRouter(Card);
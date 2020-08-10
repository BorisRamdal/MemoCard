import React, {Component} from 'react';
import { connect } from 'react-redux';
import clear from './clear.png';

class ClearAll extends Component {
    render() {
        return (
            <img
                alt=""
                src={clear}
                onClick={() => {if(window.confirm("Clear all progress?")) {this.props.clear_all_progress()}}}
            />
        )
    }
}
export default connect(
    null,
    dispatch => ({
        clear_all_progress: () => {dispatch({type: 'CLEAR_ALL'})}
    })
)(ClearAll);
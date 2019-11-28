import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import ActiveList from '../page_active_list/index';
import SavedList from '../page_saved_list/index';
import Progress from '../page_progress/index';
import loadDataHandler from '../../actions/loadData';

class Root extends Component {
    componentDidMount(){
        this.props.loadData(this.props.activeRange);
    }
    render(){
        return (
            <Fragment>
                <Route exact path="/" component={ActiveList} />
                <Route path="/saved" component={SavedList} />
                <Route path="/progress" component={Progress} />
            </Fragment>
        )
    }
}
export default connect (
    state => ({
        activeRange: state.activeRange,
    }),
    dispatch => ({
        loadData : (activeRange)=>{
            dispatch(loadDataHandler(activeRange));
        }
    })
)(Root)
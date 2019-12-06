import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import ActiveList from '../page_active_list/index';
import SavedList from '../page_saved_list/index';
import Ranges from '../page_ranges/index';
import loadDataHandler from '../../actions/loadData';

class Root extends Component {
    componentDidMount(){
        this.props.loadData();
    }
    render(){
        return (
            <Fragment>
                <Route exact path="/" component={ActiveList} />
                <Route path="/saved" component={SavedList} />
                <Route path="/ranges" component={Ranges} />
            </Fragment>
        )
    }
}
export default connect (
    null,
    dispatch => ({
        loadData : ()=>{dispatch(loadDataHandler())}
    })
)(Root)
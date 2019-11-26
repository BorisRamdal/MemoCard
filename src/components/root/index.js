import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import ActiveList from '../page_active_list/';
import SavedList from '../page_saved_list/';
import Progress from '../page_progress/';

export default function () {
    return (
        <Fragment>
            <Route exact path="/" component={ActiveList} />
            <Route path="/saved" component={SavedList} />
            <Route path="/progress" component={Progress} />
        </Fragment>
    )
}
import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import ActiveList from '../../containers/page_active_list/';
import SavedList from '../../containers/page_saved_list/';
import Progress from '../../containers/page_progress/';

export default function () {
    return (
        <Fragment>
            <Route exact path="/" component={ActiveList} />
            <Route path="/saved" component={SavedList} />
            <Route path="/progress" component={Progress} />
        </Fragment>
    )
}
import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Range from '../../components/range/range';

class Ranges extends Component {
    render() {
        const {activeRange, dataList, loadRangeHandler} = this.props;
        return(
            <Fragment>
                <Header title="All ranges" page="ranges"/>
                <section>
                    {
                       !dataList ? 'No ranges data' :
                           dataList.map((item, i) => (
                            <Range range={item.range} activerange={activeRange} key={i} loadrange={loadRangeHandler}/>
                        ))
                    }
                </section>
            </Fragment>
        )
    }
}
export default connect (
    state => ({
        activeRange: state.activeRange,
        dataList: state.dataList,
    }),
    dispatch => ({
        loadRangeHandler: (range) => dispatch({type:"SET_ACIVE_RANGE", payload: range})
    })
)(Ranges);
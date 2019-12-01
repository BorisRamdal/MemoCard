import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Range from '../../components/range/range';
import loadRange from '../../actions/loadRange'

class Ranges extends Component {
    render() {
        const {activeRange, ranges, loadRangeHandler} = this.props;
        return(
            <Fragment>
                <Header title="All ranges" index={false}/>
                <section>
                    {
                       !ranges ? 'No ranges data' :
                        ranges.map((item, i) => (
                            <Range range={item} activerange={activeRange} key={i} loadrange={loadRangeHandler}/>
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
        ranges: state.ranges
    }),
    dispatch => ({
        loadRangeHandler: (val)=>{
            dispatch(loadRange(val))
        }
    })
)(Ranges);
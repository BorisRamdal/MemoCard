import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Range from '../../components/range/range';

class Ranges extends Component {
    render() {
        const {activeRange, ranges} = this.props;
        return(
            <Fragment>
                <Header title="All ranges" index={false}/>
                <section>
                    {
                       !ranges ? 'No ranges data' :
                        ranges.map((item, i) => (
                            <Range range={item} activerange={activeRange} key={i}/>
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
    })
)(Ranges);
import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Range from '../../components/range/range';

class Ranges extends Component {
    render() {
        const {ranges} = this.props;
        return(
            <Fragment>
                <Header title="All ranges" index={false}/>
                <section>
                    {
                       !ranges ? 'No ranges data' :
                        ranges.map((item, i) => (
                            <Range range={item} key={i}/>
                        ))
                    }
                </section>
            </Fragment>
        )
    }
}
export default connect (
    state => ({
        ranges: state.ranges
    })
)(Ranges);
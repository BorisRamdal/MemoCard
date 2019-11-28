import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Range from '../../components/range/range';

class Progress extends Component {
    render() {
        const {progress, activeRange} = this.props;
        return(
            <Fragment>
                <Header title="Your Progress" index={false}/>
                <section>
                    {
                       !progress ? 'No progress data' :
                        progress.map((item) => (
                            <Range range={item.range} passed={item.passed} active={activeRange} key={item}/>
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
        progress: state.progress
    })
)(Progress);
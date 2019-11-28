import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Card from '../../components/card/card';

class ActiveList extends Component {
    render() {
        let {activeList} = this.props;
        return (
            <Fragment>
                <Header title={this.props.activeRange} index={true}/>
                <section>
                    {
                        !activeList ? 'Loading...' :
                            Object.keys(activeList).map((item) => (
                                <Card word={item} translation={activeList[item]} key={item}/>
                            ))
                    }
                </section>
            </Fragment>
        )
    }
}
export default connect(
    state => ({
        activeRange: state.activeRange,
        activeList: state.activeList
    })
)(ActiveList);
import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Card from '../../components/card/card';
import loadDataHandler from '../../actions/loadData';

class ActiveList extends Component {
    componentDidMount(){
        this.props.loadData(this.props.activeRange);
        console.log('didmount');
    }
    render() {
        let {activeList} = this.props;
        return (
            <Fragment>
                <Header title={this.props.activeRange} index={true}/>
                <section className="active-list">
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
    }),
    dispatch => ({
        loadData : (activeRange)=>{
            dispatch(loadDataHandler(activeRange));
        }
    })
)(ActiveList);
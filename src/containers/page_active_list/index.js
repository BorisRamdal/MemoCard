import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Card from '../../components/card/card';

class ActiveList extends Component {
    render() {
        let {dataList, addToSaveList} = this.props;
        console.log(this.props);
        return (
            <Fragment>
                <Header title={this.props.activeRange} index={true}/>
                <section>
                    {!dataList ? 'Loading...' :
                        dataList.filter(value => value.range === this.props.activeRange).map((item) => (
                            <Card word="the" translation="этот" key={item} addtosave={addToSaveList}/>
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
        dataList: state.dataList,
        savedList: state.savedList
    }),
    dispatch => ({
        addToSaveList: (key, val)=>{
            let obj = {};
            obj[key] = val;
            dispatch({type: 'ADD_TO_SAVELIST', payload: {...obj}})
        }
    })
)(ActiveList);
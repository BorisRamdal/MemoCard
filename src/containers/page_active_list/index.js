import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Card from '../../components/card/card';
import Blank from '../../components/blank/blank';

class ActiveList extends Component {
    render() {
        let {dataList, addToSaveList, activeRange, savedList} = this.props;
        let activeList = dataList && dataList.filter(value => value.range === activeRange)[0].words;

        let listwords = !dataList ? 'Loading...' : Object.keys(activeList).filter(value => !Object.keys(savedList).includes(value)).map((item) => (
            <Card word={item} translation={activeList[item]} key={item} addtosave={addToSaveList}/>
        ))
        listwords = listwords.length === 0 ? <Blank/> : <section>{listwords}</section>

        return (
            <Fragment>
                <Header title={activeRange} page="index"/>
                {listwords}
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
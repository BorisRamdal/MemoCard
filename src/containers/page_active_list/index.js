import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Card from '../../components/card/card';

class ActiveList extends Component {
    render() {
        let {activeList, savedList, addToSaveList} = this.props;
        return (
            <Fragment>
                <Header title={this.props.activeRange} index={true}/>
                <section>
                    {!activeList ? 'Loading...' :
                        Object.keys(activeList).filter(value => !Object.keys(savedList).includes(value)).map((item) => (
                            <Card word={item} translation={activeList[item]} key={item} addtosave={addToSaveList}/>
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
        activeList: state.activeList,
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
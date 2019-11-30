import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Card from '../../components/card/card';
import Blank from '../../components/blank/blank';

class SavedList extends Component {
    render() {
        let {savedList, removeFromSaveList} = this.props;
        return(
            <Fragment>
                <Header title="Saved Cards" index={false}/>
                {
                    !Object.keys(savedList).length > 0 ? <Blank/> :
                    <section>
                        {Object.keys(savedList).map((item) => (
                            <Card word={item} translation={savedList[item]} key={item} removefromsave={removeFromSaveList}/>
                        ))}
                    </section>
                }
            </Fragment>
        )
    }
}
export default connect(
    state => ({
        savedList: state.savedList,
    }),
    dispatch => ({
        removeFromSaveList: (key)=>{dispatch({type: 'REMOVE_FROM_SAVELIST', payload: key})}
    })
)(SavedList);
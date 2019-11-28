import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Card from '../../components/card/card';
import Blank from '../../components/blank/blank';

class SavedList extends Component {
    render() {
        let {savedList} = this.props;
        return(
            <Fragment>
                <Header title="Saved Cards" index={false}/>
                {
                    !savedList ? <Blank/> :
                    <section>
                        {Object.keys(savedList).map((item) => (
                            <Card word={item} translation={savedList[item]} key={item}/>
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
    })
)(SavedList);
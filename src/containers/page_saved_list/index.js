import React, {Fragment} from 'react';
import Header from '../../components/header/header';
import Card from '../../components/card/card';
import Blank from '../../components/blank/blank';

export default function () {
    return(
        <Fragment>
            <Header title="Saved Cards" index={false}/>
            <section className="saved-cards">
                <Card word="Sun"    translation="Солнце"/>
                <Card word="Spring" translation="Весна"/>
                <Card word="Fish"   translation="Рыба"/>
                <Card word="Beer"   translation="Пиво"/>
            </section>
        </Fragment>
    )
}
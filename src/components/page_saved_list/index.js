import React, {Fragment} from 'react';
import Header from '../header/header';
import Card from '../card/card';

export default function () {
    return(
        <Fragment>
            <Header title="Saved Cards" index={false}/>
            <section className="saved-cards">
                <Card counter="1" word="Sun"    translation="Солнце"/>
                <Card counter="2" word="Spring" translation="Весна"/>
                <Card counter="3" word="Fish"   translation="Рыба"/>
                <Card counter="4" word="Beer"   translation="Пиво"/>
            </section>
        </Fragment>
    )
}
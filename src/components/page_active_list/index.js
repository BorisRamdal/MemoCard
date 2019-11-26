import React, {Fragment} from 'react';
import Header from '../header/header';
import Card from '../card/card';

export default function () {
    return(
        <Fragment>
            <Header title="1-100" index={true}/>
            <section className="active-list">
                <Card counter="1" word="Conclusion" translation="Заключение"/>
                <Card counter="2" word="Dog"        translation="Собака"/>
                <Card counter="3" word="Summer"     translation="Лето"/>
                <Card counter="4" word="Perform"    translation="Выполнять"/>
            </section>
        </Fragment>
    )
}
import React, {Fragment} from 'react';
import Header from '../../components/header/header';
import Card from '../../components/card/card';

export default function () {
    return(
        <Fragment>
            <Header title="1-100" index={true}/>
            <section className="active-list">
                <Card word="Conclusion" translation="Заключение"/>
                <Card word="Dog"        translation="Собака"/>
                <Card word="Summer"     translation="Лето"/>
                <Card word="Perform"    translation="Выполнять"/>
            </section>
        </Fragment>
    )
}
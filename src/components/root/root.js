import React, {Fragment} from 'react';
import './root.css';
import Header from '../header/header';
import Card from '../card/card';
import Range from '../range/range';

export default function Root(){
    return (
        <Fragment>
            <Header title="1-100" index={true}/>
            <section className="active-list">
                <Card counter="1" word="Conclusion" translation="Заключение"/>
                <Card counter="2" word="Dog"        translation="Собака"/>
                <Card counter="3" word="Summer"     translation="Лето"/>
                <Card counter="4" word="Perform"    translation="Выполнять"/>
            </section>
            <section className="saved-cards">
                <Card counter="1" word="Conclusion" translation="Заключение"/>
                <Card counter="2" word="Dog"        translation="Собака"/>
                <Card counter="3" word="Summer"     translation="Лето"/>
                <Card counter="4" word="Perform"    translation="Выполнять"/>
            </section>
            <section className="progress">
                <Range range="1-100"   passed={true}  active="201-300"/>
                <Range range="101-200" passed={true}  active="201-300"/>
                <Range range="201-300" passed={false} active="201-300"/>
                <Range range="301-400" passed={false} active="201-300"/>
                <Range range="401-500" passed={false} active="201-300"/>
            </section>
        </Fragment>
    )
}
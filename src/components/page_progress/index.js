import React, {Fragment} from 'react';
import Header from '../header/header';
import Range from '../range/range';

export default function () {
    return(
        <Fragment>
            <Header title="Your Progress" index={false}/>
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
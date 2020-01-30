import React from 'react'
import { JuiceConsumer } from '../control/context'
import JuiceList from './JuiceList'
import JuiceFilter from './JuicesFilter'
import Loading from './Loading'

export default function JuiceContainer() {
    return (
        <JuiceConsumer>
            {(value) => {
                    const {loading,sortedJuices,juices} = value;
                    if(loading){
                        return <Loading/>;
                    }
                    return (
                        <div>
                           <JuiceFilter juices ={juices} />
                            <JuiceList juices ={sortedJuices}/>
                        </div>
                    );
                } }
        </JuiceConsumer>
    );
}



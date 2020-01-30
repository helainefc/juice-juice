import React from 'react'
import Juice from './Juice'
import './JuiceList.css'

export default function JuiceList({ juices }) {
    
    if(juices.length === 0){
        return(
        <div className="empty-search">
            <h3>Desafortunadamente no lo encontramos :(</h3>
        </div>
        )
    }
    return (
        <section className="juiceslist">
            <div className="juiceslist-center">
            {
                juices.map(item =>{
                    return <Juice key={item.id} juice={item} />
                })
            }
            </div>
        </section>
    )
}

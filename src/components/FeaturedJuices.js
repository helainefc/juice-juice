import React, { Component } from 'react'
import { JuiceContext } from '../control/context'
import Juice from './Juice'
import Title from './Title'
import Loading from '../components/Loading'
import '../components/FeaturedJuices.css'

export default class FeaturedJuices extends Component {
    static contextType = JuiceContext;
    render() {
        let { loading,featuredJuices: juices } = this.context;
        juices = juices.map(juice => {
            return <Juice key={juice.id} juice={juice} />
        })
        return (
            <section className='featured-juices'>
                <Title title="Jugos" />
                <div className="featured-juices-center">
                    {loading?<Loading/>:juices}
                </div>
            </section>
        )
    }
}


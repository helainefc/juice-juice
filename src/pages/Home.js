import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Benefits from '../components/Benefits'
import FeaturedJuices from '../components/FeaturedJuices'
import {Link} from 'react-router-dom'


export default function Home() {
    return (
        
        <>
        <Header>
            <Banner title="Jugos" subtitle="Jugos llenos de vitaminas desde $15.00">
                <Link to="/juices" className="btn-primary">Nuestro menú</Link>
            </Banner>
        </Header>
        <Benefits/>
        <FeaturedJuices/>
        </>
    )
}

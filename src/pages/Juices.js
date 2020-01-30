import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import JuiceContainer from '../components/JuiceContainer'
import {Link} from 'react-router-dom'
import '../components/Header.css'

const Juices =() =>{
    return(
    <>
    <Header header="juicesHeader">
        <Banner title='Variedad'>
            <Link to="/" className='btn-primary'>
                Regresar a Inicio
            </Link>
        </Banner>
    </Header>
    <section>
       <JuiceContainer/>
    </section>
    </>
    )
};

export default Juices;

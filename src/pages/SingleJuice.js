import React, { Component } from 'react'
import defaultImage from '../images/juiceDefault.jpg'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { JuiceContext } from '../control/context'
import StyleHeader from '../components/StyleHeader'
import '../components/SingleJuice.css'

export default class SingleJuice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultImage
        }
    }

    static contextType = JuiceContext;

    render() {

        const { getJuice } = this.context;
        const juice = getJuice(this.state.slug);
        if (!juice) {
            return <div className="Error">
                <h3>No pudo ser encontrado</h3>
                <Link to="/juices" className="btn-primary">
                    Regresar a Jugos
                </Link>
            </div>
        }
        const { name, description, priceSmall, priceBig, image, extras,ingredients } = juice;
        return (
            <>
                <StyleHeader img={image || this.state.defaultImage}>
                    <Banner title={`${name} juice`}>
                        <Link to="/juices" className="btn-primary">
                            Regreso a Jugos
                        </Link>
                    </Banner>
                </StyleHeader>
                <section className="single-juice">
                <div className="single-juice-info">
                    <article className="desc">
                        <h3>Detalles</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>información</h3>
                        <h6>precio chico: ${priceSmall}</h6>
                        <h6>precio grande: ${priceBig}</h6>
                    </article>
                    </div>
                </section>
                
                <section className="juice-extras">
                    <h6>Ingredientes</h6>
                    <ul className="extras">
                        {ingredients.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}

                    </ul>
                </section>
                <section className="juice-extras">
                    <h6>Extra</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}

                    </ul>
                </section>
            </>
        )
    }
}

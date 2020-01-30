import React, { Component } from 'react'
import Title from '../components/Title'
import '../components/Benefits.css'
import { GiFruitBowl } from 'react-icons/gi';
import { GiFruitTree } from 'react-icons/gi';
import { GiSunrise }   from 'react-icons/gi';

export default class Benefits extends Component {
    state = {
        benefits: [
            {
                icon: <GiSunrise />,
                title: "Saludables",
                info: "Un jugo de naranja en ayunas es una manera fantástica de limpiar y purificar el organismo"
            },
            {
                icon: <GiFruitBowl />,
                title: "Variedad de Sabores",
                info: "Para toda la familia"
            },
            {
                icon: <GiFruitTree />,
                title: "100% Naturales",
                info: "Sin consenservadores"
            }

        ]
    }
    render() {
        return (
            <section className="benefits">
                <Title title="Beneficios" />
                <div className="benefits-center">
                    {this.state.benefits.map((item, index) => {
                        return (
                            <article key={index} className="benefit">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}

                </div>
            </section>
        )
    }
}

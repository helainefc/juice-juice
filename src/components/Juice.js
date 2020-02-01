import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import defaultImage from '../images/juiceDefault.jpg'
import '../components/Juice.css'

export default function Juice({ juice }) {
    const { name, slug, image, priceBig } = juice;
    return (
        <article>
            <div className="img-container">
                <img src={image || defaultImage} alt="juice" />
                <div className="price-top">
                    <h6>${priceBig}</h6>
                    <p>Por litro</p>
                </div>
                <Link to={`/juices/${slug}`} className="btn-primary juice-link">
                    Veamos.....
                </Link>
            </div>
            <p className="juice-info">{name}</p>
        </article>
    )
}

Juice.propTypes = {
    juice: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
    })
}

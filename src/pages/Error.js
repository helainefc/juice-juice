import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <Header>
            <Banner title="404" subtitle="Page not found">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Header>
    )
}

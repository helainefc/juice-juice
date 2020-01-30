import React from 'react'
import '../components/Banner.css'
export default function Banner({ children, title, subtitle }) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div />
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

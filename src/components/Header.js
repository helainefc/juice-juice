import React from 'react'
import "../components/Header.css"

export default function Header({children,header}) {
    return <header className={header} >{children}</header>
}

Header.defaultProps = {
    header:"defaultHeader"
}
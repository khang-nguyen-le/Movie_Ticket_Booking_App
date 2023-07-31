import React from 'react'
import './SectionTitle.scss'

const SectionTitle = (props) => {
    return (
        <h1 className='tilte'>{props.children}</h1>
    )
}

export default SectionTitle
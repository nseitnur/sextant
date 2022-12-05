import React from 'react'
import  './banner.css'

function Banner(props) {
    return (
        <div className={'Banner'}>
            <h1>{props.bannerName}</h1>
        </div>
    )
}

export default Banner
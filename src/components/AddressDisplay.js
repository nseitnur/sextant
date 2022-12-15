import React, {useEffect, useState} from 'react'
import axios from 'axios'

function AddressDisplay(props) {

    const ipApi = {
        "ipv4":"93.171.64.245",
        "ipv6":"2001:0db8:85a3:0000:0000:8a2e:0370:7334"
    }

    return (
        <div>
            <h3>this is ipv4</h3>
            <li>{ipApi.ipv4}</li>
            <h3>this is ipv6</h3>
            <li>{ipApi.ipv6}</li>
        </div>
    )
}

export default AddressDisplay
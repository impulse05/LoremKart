import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const { id } = useParams();



    // TODO : use the id to fetch one product by id open 
    // call the api store in a state and display it
    return (
        <div>ProductDetail id:  {id}</div>
    )
}

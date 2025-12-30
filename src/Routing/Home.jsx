import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import ProductList from '../Tp1/Store/Store/ProductList'

export default function Home() {
    return (
        <div>


            <h1>Welcom to The Main Page</h1>
            <ProductList/>
        </div>
    )
}

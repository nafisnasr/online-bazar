import React, { useState } from 'react'
import AddOrderBtn from '../AddOrderBtn/AddOrderBtn'
import "./LastProductsBox.css"
import Product from '../Product/Product'
import { lastProductsData } from '../../data'

export default function LastProductsBox() {

    const [productsData, setProductsData] = useState(lastProductsData)

    return (
        <section className='last-products-box'>
            <h4 className="product-title">آخرین کالاهای قابل ثبت نام</h4>
            <div className="last-products-wrapper row">
                {productsData.map(product => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </section>
    )
}

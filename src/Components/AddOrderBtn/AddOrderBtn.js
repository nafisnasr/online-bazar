import React from 'react'
import { Link } from "react-router-dom"
import "./AddOrderBtn.css"

export default function AddOrderBtn({ to }) {
    return (
        <Link to={to}>
            <button className='add-order-btn'>ثبت سفارش</button>
        </Link>
    )
}

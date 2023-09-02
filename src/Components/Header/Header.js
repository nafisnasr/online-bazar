import React from 'react'
import Navbar from "../Navbar/Navbar"
import "./Header.css"

export default function Header() {
    return (
        <div className='header'>
            <div className="top-box">
                <div className="top-box-wrapper container">
                    <span>تمامی وضعیت موجودی ها و قیمت ها بروز هستند</span>
                    <span>زمان تحویل از ساعت 15:00  </span>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

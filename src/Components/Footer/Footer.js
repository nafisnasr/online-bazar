import React from 'react'
import "./Footer.css"
import { BsInstagram, BsTelegram } from "react-icons/bs"
import { BiLogoFacebook, BiLogoGoogle } from "react-icons/bi"
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-wrapper row">

                <div className="col-lg-4 col-11 right-col row">
                    <div className="title-box col-lg-6">
                        <Link to="/" className="title link">سامانه سبد بازار</Link>
                    </div>
                    <div className="about-box col-lg-6">
                        <p className="title">سبد بازار</p>
                        <p className='detail'>ثبت نام کالاهای اساسی تنظیم بازار</p>
                        <div className="social-media">
                            <span className="icon-box">
                                <BsInstagram className="icon" />
                            </span>
                            <span className="icon-box">
                                <BsTelegram className="icon" />
                            </span>
                            <span className="icon-box">
                                <BiLogoFacebook className="icon" />
                            </span>
                            <span className="icon-box">
                                <BiLogoGoogle className="icon" />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-11 center-col">
                    <div className="right">
                        <Link className='link list-item' to="/">صفحه نخست</Link>
                        <Link className='link list-item' to="/questions">سوالات متداول</Link>
                        <Link className='link list-item' to="/about-us">درباره ما</Link>
                    </div>
                    <div className="left">
                        <Link className='link list-item' to="/order">ثبت سفارش</Link>
                        <Link className='link list-item' to="/pages">نمونه برگ</Link>
                        <Link className='link list-item' to="/contact-us">تماس با ما</Link>
                    </div>
                </div>

                <div className="col-lg-3 left-col">
                    <img src="/images/copyright-1.png" alt="copyright" />
                    <img src="/images/copyright-2.png" alt="copyright" />
                </div>
            </div>

        </footer>
    )
}

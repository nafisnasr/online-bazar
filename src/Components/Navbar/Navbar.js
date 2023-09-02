import React from 'react';
import { NavLink , Link } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";
import "./Navbar.css";

export default function Navbar() {
  return (

    <nav className="navbar-main navbar navbar-expand-lg">

      <div className="container-fluid nav-wrapper" dir='rtl'>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="nav-title" to="/">سامانه <span>سبد بازار</span></Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-list ">
            <li className="nav-item">
              <NavLink className='nav-link' to='/' >صفحه نخست</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className='nav-link' to='/pages' >
                برگه ها
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to="/questions">پرسش و پاسخ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to="/contact-us">تماس با ما</NavLink>
            </li>
          </ul>
        </div>

        <form className="search-container">
          <input className="search-box" type="search" placeholder="کد رهگیری محصول را وارد کنید" />
          <span><AiOutlineSearch className='search-icon'/></span>
        </form>
      </div>
    </nav>
  )
}

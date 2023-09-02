import React from 'react'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import "./Order.css"


export default function Order() {
  return (
    <>
      <Header />

      <section className="order row">
        <div className="order-box-wrapper col-lg-6 col-11">
  
          <h4 className="title my-3">پرداخت وجه آنلاین</h4>

          <form className="form">

            <div className="input-box">
              <label className='input-label'>
                نام و نام خانوادگی
                <span className="required">*</span>
              </label>
              <input type="text" />
            </div>

            <div className="input-box">
              <label className='input-label'>
                موضوع پیام
                <span className="required">*</span>
              </label>
              <input type="text" />
            </div>

            <div className="input-box">
              <label className='input-label'>
                متن پیام
                <span className="required">*</span>
              </label>
              <textarea cols="30" rows="10"></textarea>
            </div>

            <div className="input-box">
              <label className='input-label'>
                نحوه اطلاع رسانی و ارسال پاسخ به شما
              </label>
              <select >
                <option value="1">تلفنی </option>
                <option value="2">پیامک </option>
                <option value="3">ایمیل </option>
                <option value="4">تلگرام </option>
              </select>
            </div>

            <div className="btn-container">
              <input type="submit" className="submit-btn"
                value='ارسال' />
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}

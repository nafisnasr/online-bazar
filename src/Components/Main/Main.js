import React from 'react'
import "./Main.css"
import AddOrderBtn from '../AddOrderBtn/AddOrderBtn'


export default function Main() {
    return (
        <section className='main'>
            <div className="main-wrapper">
                <div className="text-section">
                    <h2 className="title">سامانه هوشمند توزیع کالای اساسی</h2>
                    <p className="details">
                        سامانه سبد بازار یک سیستم فراگیر برای پخش ارزان کالا بین مردم میباشد , در این سامانه همه افرادی که کالایی دارند و میخواهند کالای خودشان را به قیمت پایینتر از قیمت بازار به دست مردم برسانند میتوانند درخواست خودشان را از طریق فرم مربوطه به مدیرت سایت اعلام کنند و پس از هماهنگی های لازمه و بررسی کیفیت محصول , کالای مورد نظر در سایت برای ثبت نام عموم مردم در سطح استان و یا شهرستان قرار داده شود
                    </p>
                    <div className="btn-box">
                        <AddOrderBtn to="/order" />
                    </div>
                </div>
            </div>
        </section>)
}

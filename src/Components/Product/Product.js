import React from 'react';
import AddOrderBtn from '../AddOrderBtn/AddOrderBtn';
import {MdPayment} from "react-icons/md";
import {AiOutlineCreditCard} from "react-icons/ai";
import {ImCreditCard} from "react-icons/im";
import "./Product.css";

export default function Product({ title, img, price }) {
    return (
        <div className="product-box col-lg-5 g-2 col-11">
            <div className="product-img-box">
                <img src={img} alt={title} />
            </div>
            <div className="product-text-box">
                <h6 className="title">{title}</h6>
                <p className="price">قیمت هر بسته: {price} تومان</p>
                <div className="products-date-box">
                    <p>
                        <AiOutlineCreditCard  className='icon mx-1'/>
                        ثبت نام از 1402/07/06 تا 1402/07/06
                    </p>
                    <p>
                        <ImCreditCard className='icon mx-1' />
                        ثبت نام از 1402/07/06 تا 1402/07/06
                    </p>
                    <p>
                        <MdPayment className='icon mx-1' />
                        پرداخت در فروشگاه
                    </p>
                </div>
                <div className="product-btn-box">
                    <AddOrderBtn to="/order" />
                </div>
            </div>
        </div>
    )
}

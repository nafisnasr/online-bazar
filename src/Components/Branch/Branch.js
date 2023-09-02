import React from "react";
import "./Branch.css"

export default function Branch({ img, title, phone, address }) {
    return (
        <div className="branch-box col-lg-4 col-md-6">
            <img src={img} alt={title} />
            <div className="text-box">
                <h5 className="title my-2">{title}</h5>
                <span className="phone mt-1">
                    شماره تماس:
                    {phone}
                </span>
                <span className="address">
                    آدرس:
                    {address}
                </span>
            </div>
        </div>
    )
}
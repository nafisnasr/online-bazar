import React, { useState } from 'react'
import Branch from '../Branch/Branch'
import { branchesData } from "../../data"
import AddOrderBtn from "../AddOrderBtn/AddOrderBtn"
import "./Branches.css"

export default function Branches() {
    const [branches, setBranches] = useState(branchesData)
    return (
        <div className='branches'>
            <h4 className="branches-title">مراکز تحویل کالا</h4>
            <div className="branches-wrapper container row">
                {branches.map(branch => (
                    <Branch {...branch} key={branch.id} />
                ))}
            </div>
            <AddOrderBtn to="/order" />
        </div>
    )
}

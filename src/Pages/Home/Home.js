import React from 'react'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import LastProductsBox from '../../Components/LastProductsBox/LastProductsBox'
import Branches from '../../Components/Branches/Branches'
import Footer from '../../Components/Footer/Footer'


export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <LastProductsBox />
            <Branches />
            <Footer />
        </>
    )
}

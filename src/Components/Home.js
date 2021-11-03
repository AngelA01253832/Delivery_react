import React, { useState } from 'react'
import Header from '../Components/Header'
import Recomendation from './Recomendation';

function Home(){
    const [cart,setCart]= useState(0)
    return(
        <>
            <Header/>
            <Recomendation/>
        </>
    )
}

export default Home;
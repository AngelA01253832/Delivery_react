import React, { useState } from "react";
import ImgMediaCard from "./Product";
import {Box,Grid} from '@material-ui/core';
import pizzalist from '../Fake_backend/Pizza_data'
import '../css/Menu.css'

export default function Pizza_menu(){
    return(
    <>
        <h1>Pizza Menu</h1>
        <div className="Menu-container">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    pizzalist.map((e) => 
                        <Grid item xs={6}>
                            <ImgMediaCard 
                            name = {e.name}
                            description = {e.description}
                            image = {e.image}
                            price= {e.price}
                            />    
                        </Grid>
                    )
                }
            </Grid>
        </div>
    </>

    )
}

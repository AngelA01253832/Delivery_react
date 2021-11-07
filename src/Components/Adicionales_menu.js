import React, { useState } from "react";
import ImgMediaCard from "./Product";
import {Box,Grid} from '@material-ui/core';
import adicionaleslist from "../Fake_backend/Adicionales_data";
import '../css/Menu.css'
function Adicionales(){
    return(
    <>
        <h1>Adicionales menu</h1>
        <div className="Menu-container">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    adicionaleslist.map((e) => 
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

export default  Adicionales;
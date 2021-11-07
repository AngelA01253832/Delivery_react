import React, { useState } from "react";
import ImgMediaCard from "./Product";
import {Box,Grid} from '@material-ui/core';
import '../css/Menu.css'
function Adicionales(){
    return(
    <>
        <h1>Adicionales menu</h1>
        <div className="Menu-container">
            <Grid className="Menu-container" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <div className="Columcontainer">
                        <ImgMediaCard/>    
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="Columcontainer">
                        <ImgMediaCard/>    
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="Columcontainer">
                        <ImgMediaCard/>    
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="Columcontainer">
                        <ImgMediaCard/>    
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="Columcontainer">
                        <ImgMediaCard/>    
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="Columcontainer">
                        <ImgMediaCard/>    
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="Columcontainer">
                        <ImgMediaCard/>    
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="Columcontainer">
                        <ImgMediaCard/>    
                    </div>
                </Grid>
            </Grid>
        </div>
    </>
    )
}

export default  Adicionales;
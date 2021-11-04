import React from "react";
import "../css/Recomendation.css"
import ImgMediaCard from "./Product";
import {Box,Grid} from '@material-ui/core';

function Recomendation(){
    return(  
         <div>
             <h1>Elige tu pizza</h1>
             <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="Cardcontainer">
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                    </div>
                    <div class="carousel-item">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
         </div>
    )
}

export default Recomendation;
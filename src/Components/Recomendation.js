import React from "react";
import "../css/Recomendation.css"
import ImgMediaCard from "./Product";
import {Box,Grid} from '@material-ui/core';
import pizzalist from '../Fake_backend/Pizza_data'
import recomendation1list1 from "../Fake_backend/recomendation1";
import recomendation1list2 from "../Fake_backend/recomendation2";
function Recomendation(){
    return(  
         <div>
             <h1>Recomendaciones</h1>
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
                            {
                                recomendation1list1.map((e) => 
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
                    </div>
                    <div class="carousel-item">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {
                            recomendation1list2.map((e) => 
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
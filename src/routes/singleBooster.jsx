import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import { Route, useParams } from "react-router-dom";


const SingleBooster = () => {

        const params = useParams();
    
        console.log(params); 
    
        return <h2> {params.boosterId}</h2>;
    }


export default SingleBooster;
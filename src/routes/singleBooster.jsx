import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import { Route, useParams } from "react-router-dom";


const SingleBooster = () => {

    const params = useParams();
    console.log(params['boosterId']);

    pokemon.card.all({ q: 'set.id:' + params['boosterId'] }).then(result => {
        console.log('result:')
        console.log(result) // "Venusaur"
    })

    return <h2> {params.boosterId}</h2>;
}


export default SingleBooster;
import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import { Route, useParams } from "react-router-dom";


const SingleBooster = () => {
    // recupere le nom du booster et met le dans une variable
    const { name } = useParams();
    useEffect(() => {
        pokemon.card.all({ q: `set.name:${name}` })
            .then(result => {
                setSingleBooster(result.data);
            })
    }, []);

    return (
        <div>
            <h1>Single Booster</h1>
            return <div>User ID: {booster.name}</div>;
        </div>
    );
};

export default SingleBooster;
import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import { Route, useParams } from "react-router-dom";
import AppLayout from "../../layouts/appLayout.jsx";
import Card from "../../components/card";

const Show = () => {
    const [cards, setcards] = useState();

    const params = useParams();

    useEffect(() => {
        fetchBoosterCards()
    }, []); 

    const fetchBoosterCards = async () => {
        const response = await pokemon.card.all({ q: 'set.id:' + params['boosterId'] });
        setcards(response);
    }

    return (
        <AppLayout>
            <div>
                <img src="/assets/pokeball.png" />
            </div>
            <div className="container mx-auto mt-24 grid gap-4 grid-cols-4">
                {cards && cards.length > 0 ? cards.map((card) => (
                    <Card key={card.id} pokemon={card} />
                )) : (<p className="mx-auto text-center col-span-full">No card found... 😢</p>)}
            </div>
        </AppLayout>
    );
}


export default Show;
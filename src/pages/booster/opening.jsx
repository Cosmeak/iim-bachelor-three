import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import { Route, useParams } from "react-router-dom";
import AppLayout from "../../layouts/appLayout.jsx";
import Card from "../../components/card";

const opening = () => {
    const [cards, setcards] = useState([]);
    const [loading, setLoading] = useState(false);

    const params = useParams();
    const setId = 'hgss1';

    const fetchBoosterCards = async () => {
        setLoading(true);
        const response = await pokemon.card.all({q: 'set.id:' + setId});
        const randomCardId = Math.floor(Math.random() * (response.length) + 1);
        const randomCard = response[randomCardId];
        setcards((prevCards) => [...prevCards, randomCard]);
        setLoading(false);
    };
    
    {
        cards && cards.length > 0 ? cards.map((card) => (
            <Card key={card.id} pokemon={card} />
        )) : (<p className="mx-auto text-center col-span-full">No card found... 😢</p>)
    }
    const fetchBoosterCardsRare = async () => {
        const response = await pokemon.card.all({q: 'set.id:' + setId + ' rarity:LEGEND'});
        const randomCardId = Math.floor(Math.random() * (response.length) + 1);
        const randomCard = response[randomCardId];
        setcards((prevCards) => [...prevCards, randomCard]);
    };

    useEffect(() => {
        for (let i = 0; i < 6; i++) {
            fetchBoosterCards();
        }
        fetchBoosterCardsRare();
    }, []);



    return (
        <AppLayout>
            <div className="container mx-auto mt-24 grid gap-4 grid-cols-4">
                {loading ? (
                    <p className="mx-auto text-center col-span-full">Loading...</p>
                ) : cards.length > 0 ? (
                    cards.map((card) => (
                        <Card key={card.id} pokemon={card} />
                    ))
                ) : (
                    <p className="mx-auto text-center col-span-full">No card found... 😢</p>
                )}
            </div>
        </AppLayout>
    );
};

export default opening;
import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import { Route, useParams } from "react-router-dom";
import AppLayout from "../../layouts/appLayout.jsx";
import Card from "../../components/card";

const opening = () => {
    const [cards, setcards] = useState();

    const params = useParams();
    const setId = 'hgss1'

    let cardsBooster = []

    const fetchBoosterCards = async () => {
        const response = await pokemon.card.all({q: 'set.id:' + setId})
        const randomCardId = Math.floor(Math.random() * (response.length) + 1)
        const randomCard = response[randomCardId]
        cardsBooster.push(randomCard)
        setcards(cardsBooster)
    }

    const fetchBoosterCardsRare = async () => {
        const response = await pokemon.card.all({q: 'set.id:' + setId + ' rarity:LEGEND'})
        const randomCardId = Math.floor(Math.random() * (response.length) + 1)
        const randomCard = response[randomCardId]
        cardsBooster.push(randomCard)
    }

    for (let i = 0; i < 6; i++) {
        useEffect(() => {
            fetchBoosterCards()
        }, []);
    }

    useEffect(() => {
        fetchBoosterCardsRare()
    }, []);

        return (
            <AppLayout>
                <div className="container mx-auto mt-24 grid gap-4 grid-cols-4">
                    {cards && cards.length > 0 ? cards.map((card) => (
                        <Card key={card.id} pokemon={card} />
                    )) : (<p className="mx-auto text-center col-span-full">No card found... 😢</p>)}
                </div>
            </AppLayout>
    );
};

export default opening;
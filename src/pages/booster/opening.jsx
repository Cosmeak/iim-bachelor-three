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
        console.log('Cards Booster:')
        console.log(cardsBooster)
        console.log('LENGTH: ' + cardsBooster.length)
        if (cardsBooster.length <= 5) {
            useEffect(() => {
                fetchBoosterCardsRare()
            }, []);
        }
    }


    const fetchBoosterCardsRare = async () => {
        const response = await pokemon.card.all({q: 'set.id:' + setId + ' rarity:LEGEND'})
        const randomCardId = Math.floor(Math.random() * (response.length) + 1)
        const randomCard = response[randomCardId]
        cardsBooster.push(randomCard)
    }


    for (let i = 0; i < 6; i++) {
        console.log(i)
        useEffect(() => {
            fetchBoosterCards()
        }, []);
    }

    console.log('All booster:')
    console.log(cardsBooster)

        return (
        <AppLayout>
            <h1 className="mx-auto mt-10">Opening time</h1>
        </AppLayout>
    );
};

export default opening;
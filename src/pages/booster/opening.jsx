import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import { Route, useParams } from "react-router-dom";
import AppLayout from "../../layouts/appLayout.jsx";
import Card from "../../components/card";
import card from "../../components/card";

const opening = () => {
    const [booster, setBooster] = useState();
    const [cards, setcards] = useState([]);
    const [loading, setLoading] = useState(false);

    const params = useParams();

    const randomInt = (max) => {
        return Math.floor(Math.random() * (max - 1 + 1) + 1)
    };

    const getData = async () => {
        const booster = await pokemon.set.find(params.boosterId);
        setBooster(booster);

        for (let i = 1; i <= 10; i++) {
            const card = await pokemon.card.find(booster.id + '-' + randomInt(booster.total));
            setcards((prevCards) => [...prevCards, card]);
        }
    };

    useEffect(() => {
        setLoading(true);
        getData();
        setLoading(false);
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
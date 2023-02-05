import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import { Route, useParams } from "react-router-dom";
import AppLayout from "../../layouts/appLayout.jsx";
import Card from "../../components/card";

const Show = () => {
    const [cards, setcards] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        fetchBoosterCards();
    }, []);

    const fetchBoosterCards = async () => {
        const response = await pokemon.card.all({ q: "set.id:" + params["boosterId"] });
        setcards(response);
        setIsLoading(false);
    };

    return (
        <AppLayout>
            {isLoading ? (
                <div className="flex items-center justify-center h-full">
                    <div className="lds-dual-ring"></div>
                </div>
            ) : (
                <>
                    {cards && cards.length > 0 ? (
                        <h1 className="text-5xl opacity-30 font-semibold mb-12">
                            Set: {cards[0].set.name} - {cards[0].set.releaseDate}
                        </h1>
                    ) : (
                        ""
                    )}
                    <div className="grid gap-x-8 gap-y-16 grid-cols-2">
                        {cards && cards.length > 0 ? (
                            cards.map((card) => (
                                <div
                                    key={card.id}
                                    className="bg-pokeball-white rounded-lg p-8 drop-shadow-lg flex justify-center w-full h-auto gap-4 relative"
                                >
                                    <div className="-mt-16 w-2/5">
                                        <Card pokemon={card} />
                                    </div>
                                    <div className="w-4/5">
                                        <h2 className="opacity-30 text-3xl font-medium mb-4">
                                            {card.name}
                                        </h2>
                                        <p>
                                            Card Number:{" "}
                                            <span className="font-light">
                                                {card.number}/{card.set.total}
                                            </span>
                                        </p>
                                        <p>
                                            Rarity:{" "}
                                            <span className="font-light">
                                                {card.rarity ?? "None"}
                                            </span>
                                        </p>
                                        <p>
                                            Actual average price on market:{" "}
                                            <span className="font-light">
                                                ${card.cardmarket.prices.averageSellPrice}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="mx-auto text-center col-span-full">
                                No card found... 😢
                            </p>
                        )}
                    </div>
                </>
            )}
        </AppLayout>
    );
};

export default Show;
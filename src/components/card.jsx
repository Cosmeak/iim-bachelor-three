import React, { useState, useEffect } from "react";

const Card = ({ pokemon }) => {
    const getHolo = () => {
        //
    }

    return (
        <div id={pokemon.id} className="max-w-100 max-h-100 mx-auto">
            <img
                src={pokemon.images.large}
                className="
                    relative
                    overflow-hidden
                    z-10
                    touch-none
                "
            />
        </div>
    );
};

export default Card;

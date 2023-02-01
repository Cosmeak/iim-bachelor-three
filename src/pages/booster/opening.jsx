import React, { useState, useEffect } from "react";
import pokemon from "pokemontcgsdk";
import { Route, useParams } from "react-router-dom";
import AppLayout from "../../layouts/appLayout.jsx";
import Card from "../../components/card";

const opening = () => {
    return (
        <AppLayout>
            <h1 className="mx-auto mt-10">Opening time</h1>
        </AppLayout>
    );
};

export default opening;
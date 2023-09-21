// import React from 'react';

import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {

        const gift = useContext(AssetContext);
        return (
                <div className="border-2 border-rose-500 m-5 p-5 rounded-xl">
                        <h2>Special</h2>
                        <p>Has: {asset}</p>
                        <p>Also Has: {gift}</p>
                </div>
        );
};

export default Special;
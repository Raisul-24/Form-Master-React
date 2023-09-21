// import React from 'react';

import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {

        const asset = 'diamond';
        const [money, setMoney] = useState(1000);

        return (
                <div className="border-2 border-rose-500 m-5 p-5 rounded-xl">
                        <h2 className="text-3xl font-extrabold">Grandpa</h2>
                        <MoneyContext.Provider value={[money,setMoney]}>
                        <AssetContext.Provider value="gold">
                        <div className="flex">
                                <Dad asset={asset}></Dad>
                                <Uncle asset={asset}></Uncle>
                                <Aunty></Aunty>
                        </div>
                        </AssetContext.Provider>
                        </MoneyContext.Provider>
                </div>
        );
};

export default Grandpa;


/**
 * 1. create a context and export it
 * 
 * 2. add provider for the context with a value. value could be anything
 * * 
 * 3. useContext to access value in the context API
 * 
 * */


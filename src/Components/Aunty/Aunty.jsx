// import React from 'react';

import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
        const [money,setMoney] = useContext(MoneyContext)
        return (
                <div className="border-2 border-rose-500 m-5 p-5 rounded-xl">
                        <h2>Aunty</h2>
                        <div className="flex">
                                
                                <Cousin name={"Hasib"}></Cousin>
                                <Cousin name={"Nayem"}></Cousin>
                        </div>
                        <p>Money: {money}</p>
                        <button onClick={()=>setMoney(money + 1000)}
                        className="btn btn-secondary">Add 1000 tk</button>
                </div>
        );
};

export default Aunty;
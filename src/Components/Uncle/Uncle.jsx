// import React from 'react';

import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
        return (
                <div className="border-2 border-rose-500 m-5 p-5 rounded-xl">
                        <h2>Uncle</h2>
                        <div className="flex">
                                <Cousin name={"Rohim"} asset={asset}></Cousin>
                                <Cousin name={"Karim"}></Cousin>
                        </div>
                </div>
        );
};

export default Uncle;
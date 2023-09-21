// import React from 'react';

import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

const Dad = ({asset}) => {
        return (
                <div className="border-2 border-rose-500 m-5 p-5 rounded-xl">
                        <h2>Dad</h2>
                        <div className=" lg:flex">
                                <Myself asset={asset}></Myself>
                                <Brother></Brother>
                                <Sister></Sister>
                        </div>
                </div>
        );
};

export default Dad;
// import React from 'react';

import Special from "./Special";

const Myself = ({asset}) => {
        return (
                <div className="border-2 border-rose-500 m-5 p-5 rounded-xl">
                        <h2>Myself</h2>
                        <Special asset={asset}></Special>
                </div>
        );
};

export default Myself;
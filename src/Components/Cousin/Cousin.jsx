// import React from 'react';

import Special from "../Dad/Special";

const Cousin = ({name, asset}) => {
        return (
                <div className="border-2 border-rose-500 m-5 p-5 rounded-xl">
                       <h2>Cousin</h2> 
                       <p>{name}</p>
                       <section>
                        {asset && <Special asset={asset}></Special>}
                        {name === "Nayem" && <Special></Special>}
                       </section>
                </div>
        );
};

export default Cousin;
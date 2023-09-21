// import React from 'react';

import { useEffect, useRef } from "react";

const RefForm = () => {
        

        const nameRef = useRef(null);
        const emailRef = useRef(null);
        const passwordRef = useRef(null);

        useEffect(()=>{
                // set cursor at sate
                nameRef.current.focus();
        },[])


        const handleSubmit =e =>{
                e.preventDefault();
                console.log(nameRef.current.value);
                console.log(emailRef.current.value);
                console.log(passwordRef.current.value);
        }
        return (
                <div>
                        <form onSubmit={handleSubmit}>
                                <input ref={nameRef}
                                 type="text" name="name" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br /> 
                                <input ref={emailRef} defaultValue={'abc@gamil.com'}
                                 type="email" name="email" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br />
                                <input ref={passwordRef} 
                                type="password" name="password" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br />
                                <input type="submit" value="Submit" className="text-blue"/>
                                
                        </form>
                </div>
        );
};

export default RefForm;
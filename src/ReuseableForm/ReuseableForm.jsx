// import React from 'react';

const ReuseableForm = ({fromTitle,handleSubmit ,submitBtnText='Submit'}) => {

        
        const handleLocalSubmit = e =>{
                e.preventDefault()
                const data ={
                        name : e.target.name.value,
                        email : e.target.email.value,
                        password: e.target.password.value
                }
                handleSubmit(data);
        }
        return (
                <div>
                        <h2>{fromTitle}</h2>
                        <form onSubmit={handleSubmit}>
                                <input type="text" name="name" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br /> 
                                <input type="email" name="email" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br />
                                <input type="text" name="phone" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br />
                                <input
                                 type="submit" value={submitBtnText} className="text-blue"/>
                        </form>
                </div>
        );
};

export default ReuseableForm;
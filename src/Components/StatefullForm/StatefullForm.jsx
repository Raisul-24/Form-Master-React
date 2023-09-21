import { useState } from "react";


const StatefullForm = () => {

        const [name, setName] = useState(null);
        const [email, setEmail] =useState(null);
        const [password, setPassword] = useState(null);
        const [error,setError] = useState('');

        const handleSubmit = e =>{
                e.preventDefault();
                if(password.length <8){
                        setError("Password must be 8 character or longer");
                }
                else{
                        setError('');        
                }
                console.log(name,email,password);
        }

        const handleNameChange =e =>{
                setName(e.target.value);
        }

        const handleEmailChange = e =>{
                // console.log(e.target.value);
                setEmail(e.target.value);
        }

        const handlePasswordChange = e =>{
                // console.log(e.target.value);
                setPassword(e.target.value);
        }



        return (
                <div>
                        <form onSubmit={handleSubmit}>
                                <input onChange={handleNameChange}
                                 type="text" name="name" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br /> 
                                <input onChange={handleEmailChange}
                                 type="email" name="email" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br />
                                <input onChange={handlePasswordChange}
                                type="password" name="password" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br />
                                <input type="submit" value="Submit" className="text-blue"/>
                                {
                                        error && <p>{error}</p>
                                }
                        </form>
                </div>
        );
};

export default StatefullForm;
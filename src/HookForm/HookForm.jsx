import useInputState from "../hooks/useInputState";


const HookForm = () => {
        // const [name,handleNameChange]= useInputState('raisul');

        const emailState = useInputState('raisul@gmail.com');

        const handleSubmit = e =>{
                e.preventDefault();
                console.log("ead",emailState.value);

        }
        return (
                <div>
                        <form onSubmit={handleSubmit}>
                                {/* <input value={name} onChange={handleNameChange}
                                type="text" name="name" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br /> 
                                 */}
                                <input {...emailState}
                                type="email" name="email" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br />
                                <input type="password" name="password" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br />
                                <input type="submit" value="Submit" className="text-blue"/>
                        </form>
                </div>
        );
};

export default HookForm;
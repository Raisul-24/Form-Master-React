

const SimpleForm = () => {

        const handleSubmit = e => {
                e.preventDefault();
                console.log(e.target.name.value);
                console.log(e.target.email.value);
                console.log(e.target.phone.value);

                console.log("Submitted");
        }

        return (
                <div>
                        <form onSubmit={handleSubmit}>
                                <input type="text" name="name" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br /> 
                                <input type="email" name="email" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br />
                                <input type="text" name="phone" className="border-2 border-solid bg-gray-50 m-3 p-3"/><br />
                                <input type="submit" value="Submit" className="text-blue"/>
                        </form>
                </div>
        );
};

export default SimpleForm;
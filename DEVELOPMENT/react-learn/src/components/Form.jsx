import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submittedData, setSubmittedData] = useState([]); // To store the list of submitted data

    function handleSubmit(e) {
        e.preventDefault();

        // Add current name and email to submitted data array
        const newData = { name, email };
        setSubmittedData([...submittedData, newData]);

        // Clear the input fields
        setName('');
        setEmail('');

        alert("Form Submitted Successfully");
    }

    function handleName(e) {
        setName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    return (
        <div>
            <h1>Student Details Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input 
                        type="text" 
                        placeholder='Enter your Name' 
                        value={name} 
                        onChange={handleName} 
                    />
                </label>
                <label>
                    Email: 
                    <input 
                        type="email" 
                        placeholder='Enter your email'
                        value={email} 
                        onChange={handleEmail} 
                    />
                </label>
                <button type="submit">Submit</button>
            </form>

            {/* Display submitted data */}
            <div id="datac">
                <h2>Submitted Data:</h2>
                <ul>
                    {submittedData.map(function(data, index) {
                        return <li key={index}> Name: {data.name}, Email: {data.email}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Form;

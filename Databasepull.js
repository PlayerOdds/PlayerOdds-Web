// ApiComponent.js
import React, { useState, useEffect } from 'react';

const ApiComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace 'https://jsonplaceholder.typicode.com/posts' with your API endpoint
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error}</p>;

    return (
        <div>
            <h1>API Data</h1>
            <ul>
                {data && data.map(item => (
                    <li key={item.id}>{item.title}</li> // Adjust according to the structure of your data
                ))}
            </ul>
        </div>
    );
}

export default ApiComponent;

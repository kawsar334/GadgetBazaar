
import { useState, useEffect } from 'react';
const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch("./product.json");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setTimeout(() => {
                    setData(result);
                    setLoading(false);
                }, 1000);
               

            } catch (err) {
                console.log(err)
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, ["./data.json"]);

    return { data, loading, error };
};

export default useFetch;

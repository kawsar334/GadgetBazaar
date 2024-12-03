import { useState, useEffect } from "react";

const useFetchAdminPnnel = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, {
                  
                    credentials: "include", 
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } 
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchAdminPnnel;

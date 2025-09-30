import { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = (url, method) => {
    const [Data, setData] = useState(null);
    const [Error, setError] = useState(null);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token')
            try {
                const config = {
                    headers: { Authorization: `${token}` }
                };
                
                // Handle different HTTP methods
                const res = method.toLowerCase() === 'get' 
                    ? await axios.get(url, config)
                    : await axios.post(url, {}, config);  
                // axios.post(url, data, config) ye post wlaay route par humay 3 cheezy dyni hoti hain is lie ak empty object dia hy is mn 
                setData(res.data);
            } catch (error) {
                setError(error);            
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url, method]);  // Added method to dependencies

    return { Data, Loading, Error }
}

export default useFetch
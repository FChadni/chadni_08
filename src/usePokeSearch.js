import { useState, useEffect } from 'react'
import axios from "axios";


const useVenueSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        handleS();
    },[term])

    const handleS = async () => {
        const fetchData = async () => {
            await axios.get(`https://baddayeveryday.com/api/json/pokedemo/`)
                .then((response) => {
                    setData(response.data)
                })
                .catch((err) => console.log(err))
        }
        fetchData();

    }

    return{data}
};

export default useVenueSearch;
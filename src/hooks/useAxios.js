import React, { useState } from 'react';
import uuid from "uuid";
import axios from "axios";

const useAxios = (url, format) => {
    const [state, setState] = useState([]);

    const getData = async (name) => {
        let response;
        
        if (typeof name === 'string') response = await axios.get(url + name);
        else response = await axios.get(url);  

        setState(state => [...state, { ...format(response.data) , id: uuid() }]);
    }

    const removeAll = () => {
        setState(state => [])
    }
   
    return [state, getData, removeAll]
}

export default useAxios;
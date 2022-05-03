import React, {useState, useEffect} from 'react';
import axios from "axios"
import {IoSearch} from "react-icons/io5";
import {IoClose} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {useStateValue} from "../stateProvider";
import {actionTypes} from "../reducer";

function Search(props) {
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);
    const [{}, dispatch] = useStateValue();
    const navigate = useNavigate();

    useEffect(() => {
        loadData();
    }, []);
    const loadData = async () => {
      return await axios.get("https://baddayeveryday.com/api/json/pokedemo/")
          .then((res) => {
            setData(res.data);
          }).catch((err) => console.log(err));
    }

    console.log(data)


    const handleSearch = (e) => {
        e.preventDefault();
        console.log("input", inputValue)
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: inputValue
        })
        navigate("/display");
    }

    const onSearch = (searchTerm) => {
        setInputValue(searchTerm);
        // handleSearch(searchTerm);
        console.log("search ", searchTerm);
    }



    return (
        <div>
            <form className="searchForm">
                <div className="searchBar">
                    <div className="searchIcon"><IoSearch/></div>
                    <input className="search" type="search" autoComplete="off"
                           placeholder="Search for Pokemon"
                           value={inputValue}
                           onChange={ (e) => setInputValue(e.target.value)}
                    />
                    <div className="clearIcon"><IoClose/></div>
                </div>
                <button className="searchBtn" type="submit" aria-label="submit button" onClick={handleSearch}>Search</button>

                <div className="suggestion">
                    {data.filter((item) => {
                        const searchTerm = inputValue.toLowerCase();
                        const pokename = item.name.toLowerCase();

                        return (
                            searchTerm
                            && pokename.startsWith(searchTerm)
                            && pokename !== searchTerm
                        )
                    })
                    .map((item) => (
                    <div className="suggestion-list"
                         onClick={() => onSearch(item.name)}
                         key={item.name}>
                        {item.name}
                    </div>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default Search;
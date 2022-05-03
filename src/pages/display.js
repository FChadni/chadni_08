import React, {useState} from 'react';
import Search from "../componenets/search";
import {useStateValue} from "../stateProvider";
import usePokeSearch from "../usePokeSearch";
import Popup from "../componenets/popup";

function Display(props) {
    const [{term}, dispatch] = useStateValue();
    const { data } = usePokeSearch(term);

    // setting popup
    const [show, setShow] = useState(false);
    const [pokeItem, setItem] = useState();


    return (
    <div>
        <Search/>
        {term && (
            <div className="searchResults">
                {data?.filter(data => data.name.toLowerCase().includes(term.toLowerCase()))
                    .map((item, index) => (
                        <div className="resultItem" key={index}>
                            <div className="pokeImage"
                                 onClick={() => { setShow(true); setItem(item) }}><img src={item.image} alt=""/></div>
                            <div className="pokeDetail">
                                <div className="pokeName">{item.name}</div>
                                <div className="pokeSpecie">{item.species}</div>
                                <div className="typeFeature">
                                    {item.type.map((access,index) => (
                                        <div className="typeText" key={index}>{access}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                <Popup show={show} item={pokeItem} onClose={ () => setShow(false) }/>
            </div>
        )}
    </div>
    );
}

export default Display;
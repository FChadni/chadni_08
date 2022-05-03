import React from 'react';
import Search from "../componenets/search";

function Home(props) {
    return (
        <div>
            <Search/>
            <div>
                <br/>Type any of the following in the input box:<strong>Bulbasaur, Charmander, Sandshrew,
                Diglett, Snorlax, Piloswine, Houndoom, Ludicolo, Umbreon, Tentacruelbr</strong> <br/>
                <br/>
                If you select from the suggestion then make sure to press the search button to see result.
            </div>
        </div>
    );
}

export default Home;
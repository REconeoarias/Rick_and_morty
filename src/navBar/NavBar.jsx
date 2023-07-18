import React from "react";
import SearchBar from "../search/SearchBar";

export default function NavBar (){
    return(
        <div>
             <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
    )
}
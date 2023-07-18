import React from "react";
import SearchBar from "../search/SearchBar";

export default function NavBar ({onSearch}){
    return(
        <div>
             <SearchBar onSearch={onSearch} />
        </div>
    )
}
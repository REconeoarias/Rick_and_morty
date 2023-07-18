import React, {useState , useEffect} from 'react';
import Cards from './cards/Cards';
import NavBar from './navBar/NavBar';


function App() {
   const [characters , setCharacters] = useState ([])
   return (
      <div>
         <NavBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
        
       
      </div>
   );
}

export default App;

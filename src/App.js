// import './App.css';
import Card from './card/Card';
import Cards from './cards/Cards';
import SearchBar from './search/SearchBar';
import characters from './data.js';

function App() {
   return (
      <div>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
        
       
      </div>
   );
}

export default App;

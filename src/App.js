// import './App.css';
import Card from './Prueba/Card';
import Cards from './Cards';
import SearchBar from './SearchBar';
import characters, { Rick } from './data.js';

function App() {
   return (
      <div>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      </div>
   );
}

export default App;

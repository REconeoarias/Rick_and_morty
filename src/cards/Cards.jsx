import Card from '../card/Card';
import React from 'react';
import style from './cards.module.css'

export default function Cards(props) {
   const {characters} = props
   return  <div className={style.container}>
   {characters.map((character) => (
     <Card
       key={character.id}
       id={character.id}
       name={character.name}
       species={character.species}
       gender={character.gender}
       image={character.image}
       onClose={() => window.alert('Emulamos que se cierra la card')}
     />
   ))}
 </div>

}


import { useState } from 'react';
import styles from './searchBar.module.css'

export default function SearchBar({onSearch}) {
   const[id , setId] = useState(" ")
   function handleChange(event){
      setId(event.target.value)
   }
   return (
      <div className={styles.container}>
         <input onChange={handleChange} type='search' name='search' value={id} className={styles.input}/>
         <button className={styles.button}  onClick={()=> onSearch (id)}>Agregar</button>
      </div>
   );
}

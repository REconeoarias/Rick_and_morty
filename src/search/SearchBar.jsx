import styles from './searchBar.module.css'

export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button className={styles.boton}  onClick={props.onSearch}>Agregar</button>
      </div>
   );
}

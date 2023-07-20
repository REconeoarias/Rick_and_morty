import style from './color.module.css'
import React from 'react';
import { Link } from 'react-router-dom';
export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.container} >
         <button className={style.btn} onClick={() => onClose(id)}>X</button>
         <img className={image} src={image}
            alt={name} />
         <Link to ={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <h2>{status}</h2>
      </div>
   );
}















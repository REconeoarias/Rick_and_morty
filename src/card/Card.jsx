import style from './color.module.css'
import React from 'react';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.container} >
         <button className={style.btn} onClick={() => onClose(id)}>X</button>
         <img className={image} src={name}
            alt='rick sanchez' />
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
}















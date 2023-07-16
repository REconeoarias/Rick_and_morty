import style from './color.module.css'
import React from 'react';

export default function Card(props) {
   return (
      <div className={style.Container} >
         <button className={`${style.btn} ${style.fill}`} onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img className={style.imagen} src={props.image} alt='rick sanchez' />
      </div>
   );
}















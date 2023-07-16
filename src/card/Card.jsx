import style from './color.module.css'
import React from 'react';

export default function Card(props) {
   return (
      <div className={style.container} >
         <button className={style.btn} onClick={props.onClose}>X</button>
         <img className={style.imagen} src={props.image}
            alt='rick sanchez' />
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
      </div>
   );
}















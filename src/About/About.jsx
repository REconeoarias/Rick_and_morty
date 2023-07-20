import React from 'react';
import style from './About.module.css'
function About() {
    return (
        <div className={style.container}>

            <h1 className={style.data}>Soy ronald coneo</h1>
            <img src={process.env.PUBLIC_URL + '/ABOUT.jpg'} className={style.pic} alt="About" />
            <p className={style.data}>¡Hola! Soy un desarrollador apasionado por la tecnología Soy un apasionado del aprendizaje y siempre estoy buscando nuevas cosas que aprender. Me encanta leer, escribir y hacer investigación. También me gusta aprender de mis experiencias y de las experiencias de los demás. Creo que el aprendizaje es un proceso continuo y que nunca se termina de aprender. Siempre estoy buscando formas de mejorar mis conocimientos y habilidades.

                Soy una persona curiosa y siempre estoy buscando nuevas formas de entender el mundo que me rodea. Me encanta aprender sobre diferentes culturas, idiomas y formas de pensar. Creo que el aprendizaje es una herramienta poderosa que puede ayudarnos a conectarnos con los demás y a comprender mejor el mundo que nos rodea.

                Soy una persona abierta y siempre estoy dispuesta a aprender cosas nuevas. No tengo miedo de hacer preguntas y siempre estoy buscando formas de desafiarme a mí misma. Creo que el aprendizaje es un proceso divertido y gratificante.</p>
            
        </div>
    );
}
export default About;
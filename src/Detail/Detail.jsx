import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "./Detail.module.css"

const Detail = () => {
    const [character, setCharacter] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return (
        <div>

            {
                character ? (
                    <div className={style.container}>
                        <img src={character.image} className={style.pic} alt={character.name} />
                        <h2 className={style.pic}>{character.id}</h2>
                        <h2 className={style.data}>Name : {character.name}</h2>
                        <h2 className={style.data}>Status : {character.status}</h2>
                        <h2 className={style.data}>Species : {character.species}</h2>
                        <h2 className={style.data}>Gender : {character.gender}</h2>
                        <h2 className={style.data}>Origin : {character.origin?.name}</h2>

                    </div>
                )
                    : (
                        ""
                    )
            }
        </div>
    )
}
export default Detail;
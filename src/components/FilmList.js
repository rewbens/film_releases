import React from "react";
import Film from "./Film";

function FilmList ({films}) {
    const filmNodes = films.map((film) => {
        return(
            <Film name={film.name} key={film.id}>{film.text}</Film>
        )
    })
return (
    <>
    {
        filmNodes
    }
    </>
)
}

export default FilmList;
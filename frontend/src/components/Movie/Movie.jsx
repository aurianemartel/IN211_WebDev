import { useEffect, useState } from 'react';
import axios from 'axios';

function Movie({ title, date, img }) {
    return (
        <div>
            <p> Titre : {title} </p>
            <p> Date de sortie : {date}</p>
            <img
                src={img}
                alt="poster du film" />
        </div>
    );
}

export default Movie;

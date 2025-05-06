import { useEffect, useState } from 'react';
import axios from 'axios';

function Movie({ title, date, url_img, img }) {
    return (
        <div>
            <p> Titre : {title} </p>
            <p> Date de sortie : {date}</p>
            <p> Url_img : {url_img} </p>
            <img
                src={img}
                alt="poster du film" />
        </div>
    );
}

export default Movie;

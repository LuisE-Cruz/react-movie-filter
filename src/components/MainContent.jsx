import { useState, useEffect } from 'react'
import films from '../data/films'

function MainContent() {

    // variabile con lista dei film
    const [listFilm, setListFilm] = useState(films)

    // variabile genre select
    const [genre, setGenre] = useState('');

    // aggiungo useEffect gestione filtraggio genre
    useEffect(() => {
        if (genre === "") {

            // Mostro tutti i film in caso di stringa vuota
            setListFilm(films);

        } else {

            // altrimenti filtro array sul genere selezionato
            const nuovaListaFilm = films.filter(film => film.genre === genre);

            setListFilm(nuovaListaFilm);
        }
    }, [genere]);

    return (
        <>
            <div className='container-list'>
                <select

                    className="selector-genre"
                    name="genre"
                    id="film-genre"
                    value={listFilm}
                    onChange={e => { setListFilm(e.target.value) }}

                >

                    <option value="">Select a genre</option>
                    <option value="Azione">Action</option>
                    <option value="Fantascienza">Science-fiction</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romance</option>

                </select>
                <ul>
                    {listFilm.map((film, i) => (
                        <li className='list' key={i}>
                            <a className='list-link' href="#">
                                {film.title} <br />
                                {film.genre}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default MainContent
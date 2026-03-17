import { useEffect, useState } from "react"

export default function MainContent({ films }) {

    const filmGenre = films.map((singleFilm) => singleFilm.genre)
    const genreSet = [...new Set(filmGenre)]

    const [genre, setGenre] = useState('')

    const [filteredFilms, setFilteredFilms] = useState([])

    useEffect(() => {
        const filteredFilms = films.filter(filteredFilms => filteredFilms.genre.includes(genre))
        setFilteredFilms(filteredFilms)
    }, [genre])


    return (
        <>
            <div className="container-list">
                <select className="genre-selector" name="Genre" id="film-genre" value={genre} onChange={e => { setGenre(e.target.value) }}>
                    <option value=""> -- Select a genre -- </option>
                    {
                        genreSet.map((singleGenre, index) => (
                            <option key={index} value={singleGenre}>{singleGenre}</option>
                        ))
                    }

                </select>

                <ul>
                    {filteredFilms.map((singleFilm, index) => (
                        <li className="list-film" key={index}>
                            <a className="list-link" href="#">
                                {singleFilm.title} <br />
                                {singleFilm.genre}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
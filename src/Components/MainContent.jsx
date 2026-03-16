import { useState } from "react"
import films from "../Data/films"


export default function MainContent() {

    const [filmList, setFilmList] = useState(films)


    return (
        <>
            <div className="container-list">
                <ul>
                    {filmList.map((film, index) => (
                        <li className="list-film" key={index}>
                            <a className="list-link" href="#">
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
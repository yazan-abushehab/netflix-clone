//import Home from './Home'
import { useState } from 'react';

function MovieList (){
    const [moiveArr , setMovieArr] = useState([]);
    return (
        <>
        {moiveArr.map((item)=>{
            return <div>
                <h3>{item.title}</h3>
                <img src={item.poster_path}></img>
                <p>{item.overview}</p>
                <p>{item.release_date}</p>
            </div>
        })}
        </>
    )
}
export default MovieList;
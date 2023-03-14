import axios from 'axios';
import { useState } from 'react';
import MovieList from './MovieList';


function Home (){

    const [moiveArr , setMovieArr] = useState([]);

    const sendReq = async () =>{
        //console.log("button was clicked");
        const serverURL = `http://localhost:3450/trending`;
        const resData = await axios(serverURL);
        console.log(resData.data);
        setMovieArr(resData.data)
    }
    return(
        <>
        <h1>Home</h1>
        <button onClick={sendReq}>send req</button>
        <MovieList/>
        </>
    )
}

export default Home ;
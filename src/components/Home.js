import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';


function Home (){

    const [moiveArr , setMovieArr] = useState([]);

    const sendReq = async () =>{
        //console.log("button was clicked");
        const serverURL = `https://movies-library-gules.vercel.app/trending`;
        const resData = await axios(serverURL);
        //console.log(resData.data);
        setMovieArr(resData.data)
    }
    useEffect(()=>{
        sendReq();
    })
    return(
        <>
        <h1>Home</h1>
        {/* <button onClick={sendReq}>send req</button> */}
        <MovieList moiveArr={moiveArr} />
        </>
    )
}

export default Home ;
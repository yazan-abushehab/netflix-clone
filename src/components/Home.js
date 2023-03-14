import axios from 'axios';


function Home (){

    const sendReq = async () =>{
        //console.log("button was clicked");
        const serverURL = `http://localhost:3450/trending`;
        const resData = await axios(serverURL);
        console.log(resData.data);
    }
    return(
        <>
        <h1>Home</h1>  
        <button onClick={sendReq}>send req</button>
        </>
    )
}

export default Home ;
import { useEffect, useState } from "react"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




function Favlist() {

    const [favArr, setFavArr] = useState([]);
    const sendReq = async () => {
        const serverURL = `https://movies-library-gules.vercel.app/getmovies`;
        const resData = await axios(serverURL);
        //console.log(resData.data);
        setFavArr(resData.data)
    }

    useEffect(() => {
        sendReq();
        //console.log();
    })

    return (
        <>
            <h1>FavList</h1>
            <Row xs={1} md={2} className="g-4">
                {favArr.map((item) => {
                    return <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" +item.poster_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.overview}</p>
                                    <p>{item.release_date}</p>
                                </Card.Text>
                                <Button variant="success">Update</Button>
                                <Button variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </>

    )
}
export default Favlist;
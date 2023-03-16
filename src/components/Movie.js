import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ModelMovie from './ModelMovie';


function Movie(props) {
    const [showFlag,setShowFlag] = useState(false);
    const [clickedMovie,setClickedMovie] = useState({});

    const handleShow = (props) =>{
        setClickedMovie(props.item);
        setShowFlag(true); 
    }
    const handleclose = () =>{
        setShowFlag(false);
    }

    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+props.item.poster_path} />
                    <Card.Body>
                        <Card.Title>{props.item.title}</Card.Title>
                        <Card.Text>
                            <p>{props.item.overview}</p>
                            <p>{props.item.release_date}</p>
                        </Card.Text>
                        <Button variant="primary" onClick={()=>{handleShow(props)}}>add to the favorite list</Button>
                    </Card.Body>
                </Card>
            </Col>
            <ModelMovie showFlag={showFlag} handleclose={handleclose} movieData={clickedMovie}/>
        </>
    )
}

export default Movie;
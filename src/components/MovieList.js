import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Movie from './Movie';



function MovieList(props) {

    const [moiveArr, setMovieArr] = useState([]);
    //setMovieArr(moiveArr)
    return (
        <Row xs={1} md={2} className="g-4">
            {props.moiveArr.map((item) => {
                return <Movie moiveArr={moiveArr} item={item} />
            })}
        </Row>
    )
}
export default MovieList;
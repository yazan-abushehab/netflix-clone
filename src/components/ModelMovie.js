//import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';



function ModelMovie(props) {
const [addcomment,setAddComment]= useState("")
 async function addmovie(){
    const serverURL = `https://movies-library-gules.vercel.app/getmovies`;
    const resData = await axios.post(serverURL,{"title":props.movieData.title,"poster_path":props.movieData.poster_path,"release_date":props.movieData.release_date,"overview":props.movieData.overview,"comment":addcomment});
 }
   
 
//console.log(props.item.poster_path);

    return (<Modal show={props.showFlag} onHide={props.handleclose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.movieData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body><img src={"https://image.tmdb.org/t/p/w500"+props.movieData.poster_path} width='100%'></img></Modal.Body>
      <Form.Label>Comment</Form.Label>
      <Form.Control name="comment" type="text"  onChange={(e)=>{setAddComment(e.target.value)}}/>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleclose}>
          Close
        </Button>
        <Button variant="primary" onClick={addmovie}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

    )
  }

  export default ModelMovie;
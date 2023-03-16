//import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModelMovie (props){
    return (<Modal show={props.showFlag} onHide={props.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movieData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.movieData.poster_path}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleclose}>
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    )
}

export default ModelMovie;
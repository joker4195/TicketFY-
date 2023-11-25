import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
import { Button } from "react-bootstrap";
function MoviesBox({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true); 
  const handleClose = () => setShow(false);

  return (
    <div className="card text-center bg-secondary mb-5">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path}></img>
        <div className="card-body">
          <button type="button" className="btn btn-dark" onClick={handleShow}>
            View More
          </button>
          <Modal show={show} onHide={handleClose}>
            <ModalHeader closeButton>
              <ModalTitle></ModalTitle>
            </ModalHeader>
            <ModalBody>
              <img className="card-img-top" src={API_IMG + poster_path}></img>
              <h3>
                <b>{title}</b>
              </h3>
              <h4>
                <b>IMDB :</b> {vote_average}
              </h4>
              <h5>
                <b>Release date :</b> {release_date}
              </h5>
              <br></br>
              <h6>
                <b>Overview :-</b>
              </h6>
              <p>{overview}</p>
            </ModalBody>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default MoviesBox;

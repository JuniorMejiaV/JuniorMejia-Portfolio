import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

function LearnMore() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className='project-btn col-12 mx-auto my-3'>Learn More</Button>

      <Modal show={show} onHide={handleClose}>
        <div className="portfolio-modal">
            <Modal.Header closeButton>
                <Modal.Title>Portfolio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='text-center'>Tech Stack</p>
                <div className="techLogos d-flex flex-row w-100 my-3">
                    <BsBootstrapFill size='5x' />
                    <TbBrandNextjs size='5x' />
                </div>
                <p>Step into my personal portfolio and immerse yourself in the world of my professional journey. Delve into the depths of my experience and discover the projects I'm currently working on. Here, you can learn more about my unique skills and expertise, as well as the passion that drives me to succeed.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default LearnMore;
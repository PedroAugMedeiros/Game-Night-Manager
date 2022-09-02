import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './index.css'

export default function History(item) {
  const [history, setHistory] = useState([]);

  const id = item.id;
  const getHistory = () => {
    Axios.get(`http://localhost:5000/getHistory/${id}`).then((response) => {
      setHistory(response.data);
    });
  }

  useEffect(() => {
    getHistory();
  }, []);

  const createHistoryAtualizations = () => {

    if (history.length > 0) {

      return history.map((item, index) => {
        return (
          <div className='atualizations'>
            <h2>Atualização: {index + 1}</h2>
            <h2 className='text-history'>{item.title}</h2>
            <h6 className='text-history'>{item.body}</h6>
            <h6 style={{ margin: 0 }}>Data de Criação :</h6>
            <p>{item.dateCreation.date} <br></br>{item.dateCreation.hour}</p>
            <h6 style={{ margin: 0 }}>Data de Atualização :</h6>
            <p>{item.dateAtualization.date}<br></br>{item.dateAtualization.hour}</p>
          </div>
        )
      })
    }

    return (
      <p>Ainda não possui atualizações</p>
    )
  }

  return (
    <Modal
      style={{ textAlign: 'center' }}
      {...item}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Histórico
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {createHistoryAtualizations()}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={item.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

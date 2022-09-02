import React, { useState } from "react";
import FormDialog from "../Form/index";
import "./Card.css";
import History from "../HistoryAtualizations/index";
import { formatDate } from '../../helper/getDateAndHour';
import Button from 'react-bootstrap/Button';

export default function Card(props) {
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleClick = () => {
    setModalShow(true)
  }

  return (
    <>
      <FormDialog
        edited={props.edited}
        open={open}
        id={props.id}
        setOpen={setOpen}
        title={props.title}
        body={props.body}
        dateCreation={props.dateCreation}
        dateAtualization={formatDate()}
        listCard={props.listCard}
        setListCard={props.setListCard}
        historyAtualization={props.historyAtualization}
      />
      {modalShow ?
        <History
          show={modalShow}
          onHide={() => setModalShow(false)} setModalShow={setModalShow}
          id={props.id}
          title={props.title}
          body={props.body}
          dateCreation={props.dateCreation}
          dateAtualization={formatDate()}
          listCard={props.listCard}
          setListCard={props.setListCard}
          historyAtualization={props.historyAtualization}
        /> :
        null
      }
      <div className='card'>
        <h1 className="card-title card-elements fantasy-text">{props.title}</h1>
        <p className='fantasy-text'>{props.body}</p>
        <div>
          <Button
            style={{
              width: '90%',
              fontWeight: '700',
              color: 'black',
            }} className='card-buttons' variant="primary" onClick={() => setOpen(true)}>Editar</Button>
          <Button
            style={{
              width: '90%',
              margin: '10px 0 10px 0',
              color: 'black',
              fontWeight: '700',
            }} className='card-buttons' variant="primary" onClick={handleClick}>Histórico de Modificações</Button>
        </div>
      </div>
    </>
  );
}

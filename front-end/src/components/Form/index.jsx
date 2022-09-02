import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import { formatDate } from '../../helper/getDateAndHour';

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    title: props.title,
    body: props.body,
    dateCreation: props.dateCreation,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditGame = () => {
    const newDate = formatDate()
    const edited = true;
    Axios.put(`http://localhost:5000/edit/${editValues.id}`, {
      edited: edited,
      id: editValues.id,
      title: editValues.title,
      body: editValues.body,
      dateCreation: editValues.dateCreation,
      dateAtualization: newDate,
      historyAtualization: [],
    }).then(() => {
      props.setListCard(
        props.listCard.map((value) => {
          return value.id === editValues.id
            ? {
              edited: edited,
              id: editValues.id,
              title: editValues.title,
              body: editValues.body,
              dateCreation: editValues.dateCreation, dateAtualization: newDate,
              historyAtualization: [],
            }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleSave = () => {
    handleEditGame();
  };
  const handleDeleteGame = () => {
    Axios.delete(`http://localhost:5000/delete/${editValues.id}`).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.id !== editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Nome do jogo"
            defaultValue={props.title}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="body"
            label="body"
            defaultValue={props.body}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteGame()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleSave()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

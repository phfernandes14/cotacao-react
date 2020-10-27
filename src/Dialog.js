import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(dados, exibirModal) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(exibirModal);

/*
  const handleOpen = () => {
    setOpen(true);
    console.log('dados aqui:')
    console.log(dados)
  };*/

  const handleClose = () => {
    setOpen(false);
    //exibirModal(false)
  };

  return (
    <div>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
      <h2 id="transition-modal-title">{dados.dados.nome}</h2>
            <p>Código:    <strong>{dados.dados.codigo}</strong></p>
            <p>Máxima:   <strong>{dados.dados.maxima}</strong></p>
            <p>Miníma:   <strong>{dados.dados.minima}</strong></p>
            <p>Valor na Compra:   <strong>{dados.dados.compra}</strong> </p>
            <p>Valor na Venda   <strong>{dados.dados.venda}</strong> </p>
            <p>Variação:   <strong>{dados.dados.variacao}</strong> </p>
            <small>https:..//github.com/phfernandes14/cotacao-react</small>
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

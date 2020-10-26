import React, { useState } from 'react';

import './App.css';
import Dialog from  './Dialog.js';

function App() {

  const [moedas, setMoedas] = useState(['USD'])
  const [dados, setDados] = useState(Object)
  const [exibirModal, setExibirModal] = useState(false)
  
  async function obtemCotacao(){
    const url = `http://economia.awesomeapi.com.br/json/${moedas}-BRL`
    await fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);  

           
          const dados = {
            venda: data[0].bid,
            compra: data[0].ask,
            codigo: data[0].code,
            maxima: data[0].high,
            minima: data[0].low,
            nome: data[0].name,
            variacao: data[0].pctChange,

        }
        setDados(dados)
      
        setExibirModal(true)

        })
        .catch(function (error) {
          console.error('Houve um problema ao efetuar a requisição: ' + error.message);
        });
  }
  return (
    <>
    <div className="App">
      <h1>Cotação - React</h1>
      <div className="Menu">
        <label for="select">Escolha uma Moeda: </label>
          <select name="select" onChange={e => setMoedas(e.target.value)}>
            <option value="USD">Dólar Comercial</option> 
            <option value="USDT">Dólar Turismo</option>
            <option value="CAD">Dólar Canadense</option>
            <option value="AUD">Dólar Australiano</option>
        </select>
      </div>
        <br></br>
        <br></br>
        <button onClick={obtemCotacao}>Obter Cotação</button>
    </div> {
      
      exibirModal && 
    
    <Dialog dados={dados}  />




}</>
  );
}

export default App;
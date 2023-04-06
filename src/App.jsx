import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import api from "./services/api-github";
import styled, { css } from 'styled-components';
import Elementos from './styles/style-components';



function App() {
  // criando o estado do usuário
  const [users, setUsers] = useState();

  

  
  

  // usando método useEffect para fazer a requisição, quando carregar a página
  useEffect(() => {
    api.get("/users")
      .then((Response) => setUsers(Response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro"+ err);
      });
  },[]);



  
//  retornando os dados da api 
  return (
    <Elementos.Container className='App'>
      <Elementos.Title>Lista de Usuários</Elementos.Title>
      <Elementos.Button>Voltar</Elementos.Button>
      <Elementos.Button primary>Continuar</Elementos.Button>
    <ul>
      {
      users.map((u,index) => <li key={index}> {u?.login}</li>)
      }
    </ul>
  </Elementos.Container>
   
  );
};

export default App

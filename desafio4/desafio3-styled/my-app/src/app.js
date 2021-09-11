import { useState, useEffect } from 'react'
import { url, Form } from './form'
import { Table } from './table'
import styled, { createGlobalStyle, keyframes } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body{
    background-color: #202136;
    -webkit-font-smoothing: antialiased;
    width: 100%;
    padding: 30px 15px;
    font-family: "Inter", sans-serif;

  }
`

function App ({car}) {
  const [cars, setCars] = useState([]);
  const [toast, setToast] = useState({content: '', show: false});

  useEffect(() => {  
    function getCars() {
    
      fetch(url)
      .then(response => response.json())
      .then(responseJson => setCars(responseJson))
    }
    getCars()

  })
  
  return (
    <>
    <GlobalStyle/>
      <H1>Cadastro de veículos</H1>
      <Container>
        <Form cars={cars} setCars={setCars} toast={toast} setToast={setToast} />
        <Table cars={cars} setCars={setCars} toast={toast} setToast={setToast} />
        <Toast toastDisplay={toast.show ? 'block' : 'none'} toastAnimation={ toast.show ? fadeIn : fadeOut }>
        {toast.content}
        </Toast>
      </Container>
    </>
  )
}

const H1 = styled.h1`
  font-size: 28px;
  line-height: 33px;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  text-align: center;
  color: #F5F1F2;
  margin-bottom: 30px;

`

const Container = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: calc(100vh - 110px);
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    bottom: 0;
  }
  to {
    opacity: 1;
    bottom: 30px;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
    bottom: 30px;
  }
  to {
    opacity: 0;
    bottom: 0;
  }
`

const Toast = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: ${props => props.toastDisplay};
  animation:${props => props.toastAnimation} .4s linear;
  transition: display .4s linear;
  background-color: #fff;
  box-shadow: 0 3px 3px rgb(0, 0, 0, 0.16);
  color: #000;
  padding: 15px;
  z-index: 20;
  height: 50px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom: 5px solid #5E47F9;
  font-size:14px;
`


export { App }
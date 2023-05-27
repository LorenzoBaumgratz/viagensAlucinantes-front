import styled from "styled-components";
import Header from "../components/Header";
import { useEffect } from "react";
import axios from "axios";

export default function StartPage() {

    useEffect(()=>{
        console.log("oi",process.env.REACT_APP_API_URL)
        axios.get(`${process.env.REACT_APP_API_URL}/cities`)
        .then(res=>{console.log(res)})
        .catch(err => {
            console.log(err.response.data)
          })
    },[])

    return (
        <>
            <Header />
            <MainContainer>
                <CitySelect>
                    <option value="" hidden>Selecione a cidade de destino</option>
                    <option value="1">Florianópolis</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                </CitySelect>
                <InstrucoesContainer>
                    <Instrucoes><p>1. Escolha a cidade que deseja visitar</p></Instrucoes>
                    <Instrucoes><p>2. Veja as passagens disponíveis, com preços e datas</p></Instrucoes>
                    <Instrucoes><p>3. Veja os locais aonde você pode se hospedar e todo o conforto que eles oferecem!</p></Instrucoes>

                </InstrucoesContainer>

            </MainContainer>
        </>
    )
}

const MainContainer = styled.div`
    margin-top:500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InstrucoesContainer = styled.div`
    margin-top: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 200px;
`
const Instrucoes = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 600px;
    height: 600px;
    background-color: gray;
    p{
        font-size: 46px;
    }
`
const CitySelect = styled.select`
  width: 60%;
  height:100px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 32px;
  border:none;
  margin-left: 10px;
  outline: none;
  border-radius: 10px;
       option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }
`
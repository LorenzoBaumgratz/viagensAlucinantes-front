import styled from "styled-components";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContexto } from "../contexts/context";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
    const navigate = useNavigate();
    const [cities, setCities] = useState([])
    const {city,setCity}=useContexto()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/cities`)
            .then(res => {
                setCities(res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [])
    console.log("city",city[0])
    return (
        <>
            <Header />
            <MainContainer>
                <CitySelect onChange={(e)=>setCity(e.target.value)}>
                    <option value="" hidden>Selecione a cidade de destino</option>
                    {cities.map(c => <option key={c.id} value={[c.id,c.cityImgUrl]}>{c.city}</option>)}
                </CitySelect>
                <InstrucoesContainer>
                    <Instrucoes>
                        <p>1. Escolha a cidade que deseja visitar</p>
                    </Instrucoes>
                    <Instrucoes>
                        <p>2. Veja as passagens disponíveis, com preços e datas</p>
                        {city?<div onClick={()=>navigate("/passagens")}><span>Clique aqui</span></div>:""}
                    </Instrucoes>
                    <Instrucoes>
                        <p>3. Veja os locais aonde você pode se hospedar e todo o conforto que eles oferecem!</p>
                        {city?<div onClick={()=>navigate("/hospedagens")}><span>Clique aqui</span></div>:""}
                    </Instrucoes>
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
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 600px;
    height: 600px;
    background-color: gray;
    div{
        cursor: pointer;
        span{
            font-size: 46px;
            color: #1cf63e;
        }
    }
    p{
        height: 300px;
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
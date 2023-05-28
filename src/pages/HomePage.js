import styled from "styled-components"
import Header from "../components/Header"
import { useContexto } from "../contexts/context"
import { useEffect, useState } from "react"
import axios from "axios"
import Passagem from "../components/Passagem"

export default function HomePage() {
    const {city,setCity}=useContexto()
    const [passagem,setPassagem]=useState([])
    
    useEffect(()=>{
        axios.post(`${process.env.REACT_APP_API}/tickets/main/${city[0]}`,{
            "min": 100000,
            "max": 500000
          })
        .then(res=>{
            setPassagem(res.data)
        })
        .catch(err => {
            console.log(err.response.data)
        })
    },[])
    console.log("img",city)
    return (
        <>
            <Header />
            <MainContainer>
                <LateralContainer>
                    <Min type="range" placeholder="name .."/> 
                    <Max type="range" placeholder="name .."/> 

                </LateralContainer>
                <PrincipalContainer>
                    <TituloContainer><span>Passagens para {city.split(",")[2]}</span></TituloContainer>
                    <PassagensContainer>
                        {passagem.map(p=><Passagem id={p.id} departureTime={p.departureTime} ticketPrice={p.ticketPrice} date={p.date} city={p.city} img={city.split(",")[1]}/>)}
                    </PassagensContainer>
                </PrincipalContainer>
            </MainContainer>
        </>
    )
}

const MainContainer = styled.div`
    margin-top:100px;
    display: flex;
`
const PassagensContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 125px;
    margin-top: 150px;
    width: 80%;
`
const LateralContainer = styled.div`
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    height: 94.9vh;
    background-color: #3e67cf;
`
const PrincipalContainer = styled.div`
    width: 100%;
    height: 94.9vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
`
const TituloContainer= styled.div`
    margin-top: 50px;
    span{
    font-weight: 700;
    font-size: 60px;
    }
`
const Min=styled.input`
    height: 36px;
    width: 70%;
    margin-bottom: 100px;
    cursor: pointer;

  &:focus {
    outline: none;
  }
`

const Max=styled.input`
    height: 36px;
    width: 70%;
    cursor: pointer;

  &:focus {
    outline: none;
  }
`
import styled from "styled-components"
import Header from "../components/Header"
import { useContexto } from "../contexts/context"
import { useEffect, useState } from "react"
import axios from "axios"
import Hospedagem from "../components/Hospedagem"

export default function Hospedagens() {
    const {city}=useContexto()
    const [hospedagem,setHospedagem]=useState([])
    const [min,setMin]=useState(0)
    const [max,setMax]=useState(50000)
 
    useEffect(()=>{
        axios.post(`${process.env.REACT_APP_API}/accommodations/main/${city[0]}`,{
            "min": min*100,
            "max": max*100
          })
        .then(res=>{
            setHospedagem(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.response.data)
        })
    },[min,max])
    return (
        <>
            <Header />
            <MainContainer>
                <LateralContainer>
                    <span>Min: R$ {min}</span>
                    <Min type="range" value={min} min={0} max={50000} onChange={e=>setMin(e.target.value)}/> 
                    <span>Max: R$ {max}</span>
                    <Max type="range" value={max} min={0} max={50000} onChange={e=>setMax(e.target.value)}/> 
                </LateralContainer>
                <PrincipalContainer>
                    <TituloContainer><span>Hospedagens em {city.split(",")[2]}</span></TituloContainer>
                    <HospedagensContainer>
                    {hospedagem.map(h=><Hospedagem id={h.id} hotelPrice={h.hotelPrice} hotelName={h.hotelName} mainUrl={h.mainUrl}/>)}
                    </HospedagensContainer>
                </PrincipalContainer>
            </MainContainer>
        </>
    )
}

const HospedagensContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 125px;
    margin-top: 150px;
    width: 80%;
`
const MainContainer = styled.div`
    margin-top:100px;
    display: flex;
`
const LateralContainer = styled.div`
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    height: 94.9vh;
    background-color: rgba(0,0,0,0.1);
    span{
        font-size: 30px;
        font-weight: 600;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    
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
    height: 15px;
    width: 70%;
    margin-bottom: 100px;
    -webkit-appearance: none;
    border-radius: 5px;
    outline: none;
    background: #FFFFFF;
    cursor: pointer;

  &:focus {
    outline: none;
  }
`

const Max=styled.input`
    height: 15px;
    width: 70%;
    margin-bottom: 100px;
    -webkit-appearance: none;
    border-radius: 5px;
    outline: none;
    background: #FFFFFF;
    cursor: pointer;

  &:focus {
    outline: none;
  }
`
import styled from "styled-components";
import HeaderBack from "../components/HeaderBack";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetalhesPassagem() {
    const {idTicket}=useParams()
    const [ticket,setTicket]=useState({})
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}/tickets/${idTicket}`)
        .then(res=>{
            setTicket(res.data[0])
        })
        .catch(err => {
            console.log(err.response.data)
        })
    },[])

    return (
        <>
            <HeaderBack />
            <MainContainer>
                <PrincipalContainer>
                    <TituloContainer><span>Passagem para {ticket.toCity}</span></TituloContainer>
                    <DetalheContainer>
                        <p>Cidade de Destino: {ticket.toCity}</p>
                        <p>Cidade de Origem: {ticket.fromCity}</p>
                        <p>Companhia aérea: {ticket.airlineName}</p>
                        <p>Horario de partida:  {ticket.departureTime}</p>
                        <p>Horario previsto de chegada: {ticket.arrivalTime}</p>
                        <p>Preço da passagem: R$ {(ticket.ticketPrice/100).toFixed(2)}</p>
                    </DetalheContainer>
                </PrincipalContainer>
            </MainContainer>
        </>
    )
}

const TituloContainer = styled.div`
    margin-top: 100px;
    span{
    font-weight: 700;
    font-size: 60px;
    }
`

const DetalheContainer = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 200px;
    p{
    font-size: 40px;
    margin-top: 50px;
    }
`
const MainContainer = styled.div`
    margin-top:100px;
`

const PrincipalContainer = styled.div`
    width: 100%;
    height: 94.9vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
`
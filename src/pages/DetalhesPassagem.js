import styled from "styled-components";
import HeaderBack from "../components/HeaderBack";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../images/Passagens-aéreas.jpg"

export default function DetalhesPassagem() {
    const { idTicket } = useParams()
    const [ticket, setTicket] = useState({})
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/tickets/${idTicket}`)
            .then(res => {
                setTicket(res.data[0])
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }, [])

    return (
        <>
            <HeaderBack />
            <MainContainer>
                <PrincipalContainer>
                    <TituloContainer><span>Passagem para {ticket.toCity}</span></TituloContainer>
                    <ConteudoContainer>
                        <DetalheContainer>
                            <p>Cidade de Destino: {ticket.toCity}</p>
                            <p>Cidade de Origem: {ticket.fromCity}</p>
                            <p>Companhia aérea: {ticket.airlineName}</p>
                            <p>Horario de partida:  {ticket.departureTime}</p>
                            <p>Horario previsto de chegada: {ticket.arrivalTime}</p>
                            <p>Preço da passagem: R$ {(ticket.ticketPrice / 100).toFixed(2)}</p>
                        </DetalheContainer>
                        <img src={image}/>
                    </ConteudoContainer>
                </PrincipalContainer>
            </MainContainer>
        </>
    )
}

const TituloContainer = styled.div`
    margin-top: 50px;
    span{
    font-weight: 700;
    font-size: 40px;
    }
`
const ConteudoContainer = styled.div`
    display: flex;
    width: 900px;
    justify-content: center;
    align-items: center;
    gap: 50px;

    img{
        margin-top: 50px;
        width: 300px;
        height: 300px;
        border-radius: 50%;
    }
`
const DetalheContainer = styled.div`
    margin-top: 50px;
    height: 270px;
    width: 500px;
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    background-color: #ededed;
    border-radius: 30px;
    padding-bottom: 50px;
    p{
    font-size: 20px;
    margin-top: 20px;
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
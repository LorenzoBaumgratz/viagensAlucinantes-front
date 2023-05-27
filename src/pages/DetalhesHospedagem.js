import styled from "styled-components";
import HeaderBack from "../components/HeaderBack";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import React from 'react';

export default function DetalhesHospedagem() {
    return (
        <>
            <HeaderBack />
            <MainContainer>
                <PrincipalContainer>
                    <TituloContainer><span>Nome do Hotel</span></TituloContainer>
                    <CarrosselContainer>
                        <Carousel fade>
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block w-100"
                                    src=""
                                    alt="Image One"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block w-100"
                                    src=""
                                    alt="Image Two"
                                />
                                
                            </Carousel.Item>
                        </Carousel>
                    </CarrosselContainer>
                    <DetalheContainer>
                        <QuadradosContainer>
                            <p>Características:</p>
                            <ul>
                                <li>Local</li>
                                <li>Preço</li>
                                <li>Descrição</li>
                            </ul>
                        </QuadradosContainer>
                        <QuadradosContainer>
                            <p>Comodidades:</p>
                            <ul>
                                <li>Piscina</li>
                                <li>Sauna</li>
                            </ul>
                        </QuadradosContainer>
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
const CarrosselContainer = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 600px;
`
const DetalheContainer = styled.div`
    margin-top: 250px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 200px;
    padding-left: 200px;
    p{
    font-size: 40px;
    }
`

const QuadradosContainer = styled.div`
    background-color: green;
    width: 1000px;
    height: 500px;
    p{
        font-size: 50px;
        font-weight: 700;
    }
    li{
        margin-left: 30px;
        font-size: 40px;
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
import styled from "styled-components";
import HeaderBack from "../components/HeaderBack";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetalhesHospedagem() {
    const { idHospedagem } = useParams()
    const [hosp, setHosp] = useState([])
    const [areas, setAreas] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/accommodations/${idHospedagem}`)
            .then(res => {
                setHosp(res.data)
                console.log(res.data)
                setAreas(res.data.areas)
                setImages(res.data.images)
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
                    <TituloContainer><span>{hosp.hotelName}</span></TituloContainer>
                    <CarrosselContainer>
                        <Carousel fade>
                            {images.map(i =>
                                <Carousel.Item interval={1500}>
                                    <img
                                        className="d-block w-100"
                                        src={i.url}
                                        alt="Image One"
                                    />

                                </Carousel.Item>
                            )}
                        </Carousel>
                    </CarrosselContainer>
                    <DetalheContainer>
                        <QuadradosContainer>
                            <p>Características</p>
                            <ul>
                                <li>{hosp.city}</li>
                                <li>R$ {(hosp.hotelPrice / 100).toFixed(2)}</li>
                                <li>{hosp.description}</li>
                            </ul>
                        </QuadradosContainer>
                        <QuadradosContainer>
                            <p>Comodidades</p>
                            <ul>
                                {areas.map(a => <li>{a.type}</li>)}
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
    width: 2200px;
    height: 900px;
    img{
        height: 900px;
    }
`
const DetalheContainer = styled.div`
    margin-top: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 200px;
    p{
    font-size: 40px;
    }
`

const QuadradosContainer = styled.div`
    border-radius: 50px;
    background-color: rgba(5,38,124,0.2);
    width: 1000px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    p{
        font-size: 50px;
        font-weight: 700;
        margin-bottom: 50px;
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
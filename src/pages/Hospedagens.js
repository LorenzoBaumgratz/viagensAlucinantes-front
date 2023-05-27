import styled from "styled-components"
import Header from "../components/Header"

export default function Hospedagens() {
    return (
        <>
            <Header />
            <MainContainer>
                <LateralContainer>
                    <Min type="range" placeholder="name .."/> 
                    <Max type="range" placeholder="name .."/> 
                </LateralContainer>
                <PrincipalContainer>
                    <TituloContainer><span>Hospedagens em Floripa</span></TituloContainer>
                </PrincipalContainer>
            </MainContainer>
        </>
    )
}

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
    background-color: red;
`
const PrincipalContainer = styled.div`
    width: 100%;
    height: 94.9vh;
    background-color: purple;
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
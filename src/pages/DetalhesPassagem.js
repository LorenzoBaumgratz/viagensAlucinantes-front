import styled from "styled-components";
import HeaderBack from "../components/HeaderBack";

export default function DetalhesPassagem() {
    return (
        <>
            <HeaderBack />
            <MainContainer>
                <PrincipalContainer>
                    <TituloContainer><span>Passagem para Floripa</span></TituloContainer>
                    <DetalheContainer>
                        <p>Cidade de Destino:</p>
                        <p>Cidade de Origem:</p>
                        <p>Companhia aérea:</p>
                        <p>Horario de partida:</p>
                        <p>Horario previsto de chegada:</p>
                        <p>Preço da passagem:</p>
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
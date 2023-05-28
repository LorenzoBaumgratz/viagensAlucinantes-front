import styled from "styled-components"

export default function HeaderBack(){
    return(
        <HeaderContainer>
            <p>Viagens Alucinantes</p>
            <p>Voltar</p>           
        </HeaderContainer>
    )
}

const HeaderContainer=styled.div`
    background-color: yellow;
    height: 100px;
    width: 100%;
    box-shadow: 0 4px 4px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 70px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    p{
        font-size: 40px;
        font-weight: 700;
    }
`
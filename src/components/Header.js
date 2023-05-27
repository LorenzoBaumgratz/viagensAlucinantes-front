import styled from "styled-components"

export default function Header(){
    return(
        <HeaderContainer>
            Viagens Alucinantes
        </HeaderContainer>
    )
}

const HeaderContainer=styled.div`
    background-color: yellow;
    height: 100px;
    width: 100%;
    box-shadow: 0 4px 4px rgba(0,0,0,0.2);
    font-size: 40px;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding: 0 70px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
`
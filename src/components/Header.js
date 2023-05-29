import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function Header(){
    const navigate = useNavigate();

    return(
        <HeaderContainer onClick={()=>navigate("/")}>
            <p>Viagens Alucinantes</p>
        </HeaderContainer>
    )
}

const HeaderContainer=styled.div`
    background-color: #ededed;
    height:50px;
    width: 100%;
    box-shadow: 0 4px 4px rgba(0,0,0,0.2);
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding: 0 70px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    p{
        font-size: 30px;
        font-weight: 700;
        cursor: pointer;
    }
`
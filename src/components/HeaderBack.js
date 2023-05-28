import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function HeaderBack(){
    const navigate = useNavigate();

    return(
        <HeaderContainer>
            <p onClick={()=>navigate("/")}>Viagens Alucinantes</p>
            <p onClick={()=>navigate(-1)}>Voltar</p>           
        </HeaderContainer>
    )
}

const HeaderContainer=styled.div`
    background-color: #ededed;
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
        cursor: pointer;
    }
`
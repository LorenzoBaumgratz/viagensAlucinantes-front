import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function Passagem(props){
    const navigate = useNavigate();

    return(
        <Div onClick={()=>navigate(`/passagens/${props.id}`)}>
            <img src={props.img} alt="img"/>
            <p>{props.date} - {props.departureTime}</p>
            <p>R${(props.ticketPrice/100).toFixed(2)}</p>
            <p>De: {props.city}</p>

        </Div>
    )
}

const Div=styled.div`
    width: 200px;
    height: 250px;
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius:15px;
    p{
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    img{
        width: 100%;
        height: 70%;
        border-top-left-radius:15px;
        border-top-right-radius:15px;
    }
`
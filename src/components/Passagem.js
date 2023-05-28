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
    width: 500px;
    height: 600px;
    background-color: pink;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-size: 40px;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    img{
        width: 100%;
        height: 80%;
    }
`
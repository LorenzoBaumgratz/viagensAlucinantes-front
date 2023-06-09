import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function Hospedagem(props){
    const navigate = useNavigate();
    console.log("hospId",props.id)
    return(
        <Div onClick={()=>navigate(`/hospedagens/${props.id}`)}>
            <img src={props.mainUrl} alt="img"/>
            <p>{props.hotelName}</p>
            <p>R${(props.hotelPrice/100).toFixed(2)}</p>
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
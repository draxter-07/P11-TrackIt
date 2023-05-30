import styled from "styled-components"
import { Link } from 'react-router-dom'

export default function Bottom(){
    return(
        <Bot>
            <Link  to="/habitos">Hábitos</Link>
            <Redonda><Link  to="/hoje">Hoje</Link></Redonda>
            <Link  to="/habitos">Histórico</Link>
        </Bot>
    )
}

const Bot = styled.div`
    position: fixed;
    top: 617px;
    left: 0px;
    height: 50px;
    width: 375px;
    background: #126BA5;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px 10px;
    & :nth-child(1) {
        color: white;
        text-decoration: none;
    }
    & :nth-child(3) {
        color: white;
        text-decoration: none;
    }
`
const Redonda = styled.div`
    position: absolute;
    bottom: 15px;
    left: 140px;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
`
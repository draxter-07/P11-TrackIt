import styled from "styled-components"
import MiniLogo from './assets/logo-mini.svg'

export default function Top(prop){
    return(
        <Topo data-test="header">
            <img src={MiniLogo}></img>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiWiEKZLiLulZfHbHicR4vSPiZhKRkZhdsoMKz0EG8g&s'></img>
        </Topo>
    )
}

const Topo = styled.div`
    box-sizing: border-box;
    position: fixed;
    width: 375px;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    z-index: 1;
    & :nth-child(1) {
        width: 50px;
        height: 50px;
    }
    & :nth-child(2) {
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
`
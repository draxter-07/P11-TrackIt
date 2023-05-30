import styled from "styled-components"

export default function Top(){
    return(
        <Topo>
            <img src="https://imagepng.org/wp-content/uploads/2017/10/quadrado-preto-1.png"></img>
            <img src="https://imagepng.org/wp-content/uploads/2017/10/quadrado-preto-1.png"></img>
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
        height: 10px;
    }
    & :nth-child(2) {
        width: 50px;
        border-radius: 50px;
    }
`
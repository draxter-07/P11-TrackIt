import Top from './comps/Top.jsx'
import Bottom from './comps/Bottom.jsx'
import styled from 'styled-components'

export default function HabsPage(){
    let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    return(
        <>
        <Top/>
        <All>
            <Data>
                Dia, dia-mês
            </Data>
            <Status>
                enhnum
            </Status>
            <Hab>
                <Lado>
                    Nome hábito
                    <Info>
                        Sequência 
                        <br/>
                        Recorde
                    </Info>
                </Lado>
                <button>v</button>
            </Hab>
        </All>
        <Bottom/>
        </>
    )
}

const All = styled.div`
    box-sizing: border-box;
    background: #E5E5E5;
    padding: 90px 10px;
    color: #666666;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
` 
const Hab = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    background: white;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
    margin: 15px 0px 0px 0px;
    button{
        width: 30px;
        height: 30px;
    }
`
const Lado = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    color: #666666;
    font-size: 20px;
`
const Info =styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 10px 0px 0px 0px;
    color: #666666;
    font-size: 13px;
`
const Data = styled.div`
    color: #126BA5;
    font-size: 23px;
    height: auto;
    margin: 0px 0px 5px 0px;
`
const Status = styled.div`
    color: #BABABA;
    font-size: 20px;
    height: auto;
`
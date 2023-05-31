import Top from './comps/Top.jsx'
import Bottom from './comps/Bottom.jsx'
import styled from 'styled-components'
import { useState } from 'react'

export default function HabsPage(){
    let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let [selectDays, setSelectDays] = useState([])
    let [createArea, setCreateArea] = useState('none');
    let habs = ['hábito'];
    const CreateHab = styled.div`
        width: 100%;
        padding: 15px;
        height: auto;
        background: white; 
        margin: 0px 0px 15px;  
        border-radius: 5px;
        display: ${createArea};
        input{
            box-sizing: border-box;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            width: 100%;
            padding: 10px;
            opacity: 0.5;
        }
    ` 
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
    const MyHabs = styled.div`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        height: auto;
        color: #126BA5;
        margin: 0px 0px 20px;
        button{
            width: 30px;
            height: 25px;
            background: #52B6FF;
            border-radius: 4.63636px;
            padding: 1px;
            color: white;
            border: none;
            text-align: center;
            margin: 0px;
        }
    `
    const Dias = styled.div`
        display: flex;
        flex-direction: row;
        height: auto;
        margin: 15px 0px 0px 0px;
        button{
            box-sizing: border-box;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            opacity: 0.5;
            width: 30px;
            margin: 0px 5px 0px 0px;
            height: 30px;
        }
    `
    const Botoes = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        height: 30px;
        margin: 15px 0px 0px;
        & :nth-child(1){
            color: #52B6FF;
            background: white;
            border: none;
            font-weight: bold;
            margin: 0px 5px 0px 0px;
        }
        & :nth-child(2){
            background: #52B6FF;
            width: 84px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `
    const Hab = styled.div`
        width: 100%;
        padding: 15px;
        height: auto;
        background: white; 
        margin: 0px 0px 15px;  
        border-radius: 5px;
        font-size: 20px;
    `
    function criar_hab(){
        setCreateArea('inline');
    }
    function criar_hab_cancel(){
        setCreateArea('none');
    }
    function select_day(e){
        let id = e.target.id;
        let new_set = [...selectDays];
        new_set.push(id);
        setSelectDays(new_set);
    }
    if (habs.length == 0){
        return(
            <>
                <Top/>
                <All>
                    <MyHabs>
                        Meus Hábitos
                        <button data-test="habit-create-btn" onClick={criar_hab}>+</button>
                    </MyHabs>
                    <CreateHab data-test="habit-create-container">
                        <input placeholder="nome do hábito" data-test="habit-name-input"></input>
                        <Dias>
                            {dias.map((dia)=>
                                <button id={dia} data-test="habit-day">{dia[0]}</button>
                            )}
                        </Dias>
                        <Botoes>
                            <button data-test="habit-create-cancel-btn" onClick={criar_hab_cancel}>Cancelar</button>
                            <button data-test="habit-create-save-btn">Salvar</button>
                        </Botoes>
                    </CreateHab>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </All>
                <Bottom/>
            </>
            )
    }
    return(
        <>
        <Top/>
        <All>
            <div>{selectDays}</div>
            <MyHabs>
                Meus Hábitos
                <button data-test="habit-create-btn" onClick={criar_hab}>+</button>
            </MyHabs>
            <CreateHab data-test="habit-create-container">
                <input placeholder="nome do hábito" data-test="habit-name-input"></input>
                <Dias>
                    {dias.map((dia)=>
                        <button id={dia} data-test="habit-day" onClick={(e) => select_day(e)}>{dia[0]}</button>
                    )}
                </Dias>
                <Botoes>
                    <button data-test="habit-create-cancel-btn" onClick={criar_hab_cancel}>Cancelar</button>
                    <button data-test="habit-create-save-btn">Salvar</button>
                </Botoes>
            </CreateHab>
            {habs.map((habito)=>
                <Hab>
                    {habito}
                    <Dias>
                        {dias.map((dia)=>
                            <button day={dia}>{dia[0]}</button>
                        )}
                    </Dias>
                </Hab>
            )}
        </All>
        <Bottom/>
        </>
    )
}
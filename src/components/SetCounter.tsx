
import {Button} from "./Button";
import React, {ChangeEvent, useState} from "react";


type SetCounterPropsType = {
    maxValue: number
    startValue: number
    setButtonHandler:()=>void
    setMaxValue:(v: number)=>void
    setStartValue:(v: number)=>void
}
export const SetCounter = (props: SetCounterPropsType) => {

    const [inputCounterValue, SetInputCounterValue] = useState(props.startValue)
    const changeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <div className={"wrapper"}>
            <div className={"setCounterWrapper"}>
                <div>max value: <input value={props.maxValue} onChange={(event)=>{props.setMaxValue(+event.currentTarget.value)}}/></div>
                <div>start value: <input value={props.startValue} onChange={(event)=>{props.setStartValue(+event.currentTarget.value)}}/></div>


            </div>
            <div className={"buttonsWrapper"}>
                {/*<button className={"buttons"}*/}
                {/*        disabled={props.counterValue >= 5}*/}
                {/*        onClick={onClickIncHandler}*/}
                {/*>inc*/}
                {/*</button>*/}
                {/*<button className={"buttons"}*/}
                {/*        disabled={props.counterValue === 0}*/}
                {/*        onClick={onClickResetHandler}*/}
                {/*>reset*/}
                {/*</button>*/}
                <Button className={"class-1"} name={"set"} disabled={false} onClick={props.setButtonHandler}/>

            </div>
        </div>
    )
}
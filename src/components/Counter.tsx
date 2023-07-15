import "./Counter.css"
import React from "react";
import {Button} from "./Button";


type CounterPropsType = {
    maxValue: number
    startValue: number
    counterValue: number
    incCounterValue: () => void
    resetCounterValue: () => void
    error: string | null
}

export const Counter = (props: CounterPropsType) => {
    const onClickIncHandler = () => {
        props.incCounterValue()
    }

    const onClickResetHandler = () => {
        props.resetCounterValue()
    }


    return (
        <div className={"wrapper"}>
            <div className={"countWrapper"}>
                <div className={props.counterValue === props.maxValue ? 'counterRed' : ''}>{props.error ? props.error : props.counterValue}</div>

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
                <Button className={"class-1"} name={"inc"} disabled={props.counterValue >= props.maxValue} onClick={onClickIncHandler}/>
                <Button className={"class-2"} name={"reset"} disabled={props.counterValue === 0} onClick={onClickResetHandler}/>
            </div>
        </div>
    )
}
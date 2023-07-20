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
    message: string | null
    editMode: boolean
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
                <div className={props.error ? 'error' :
                    props.message ? 'counterMessage' :
                        props.counterValue === props.maxValue ? 'counterRed' : ''
                }>
                    {props.error ? props.error : props.message ? props.message : props.counterValue}
                </div>

            </div>
            <div className={"buttonsWrapper"}>
                <Button className={"class-1"} name={"inc"} disabled={props.counterValue >= props.maxValue || props.editMode}
                        onClick={onClickIncHandler}/>
                <Button className={"class-2"} name={"reset"} disabled={props.counterValue <= props.startValue || props.editMode}
                        onClick={onClickResetHandler}/>
            </div>
        </div>
    )
}
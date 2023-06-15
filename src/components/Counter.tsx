import "./Counter.css"
import React from "react";
import {Button} from "./Button";

type CounterPropsType = {
    counterValue: number
    incCounterValue: () => void
    resetCounterValue: () => void
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
                <div className={props.counterValue === 5 ? 'counterRed' : ''}>{props.counterValue}</div>

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
                <Button name={"inc"} disabled={props.counterValue >= 5} callBack={onClickIncHandler}/>
                <Button name={"reset"} disabled={props.counterValue === 0} callBack={onClickResetHandler}/>
            </div>
        </div>
    )
}
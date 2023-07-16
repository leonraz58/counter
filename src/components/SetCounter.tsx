import {Button} from "./Button";
import React, {ChangeEvent, useState} from "react";


type SetCounterPropsType = {
    maxValue: number
    startValue: number
    setValues: (maxInputValue: number, startInputValue: number) => void
    setError: (message: string | null) => void
    setMessage: (message: string | null) => void
    editMode: boolean
    setEditMode:(editMode: boolean) => void
}
export const SetCounter = (props: SetCounterPropsType) => {


    const [inputMaxCounterValue, setInputMaxCounterValue] = useState(props.maxValue)
    const [inputStartCounterValue, setInputStartCounterValue] = useState(props.startValue)

    if (inputMaxCounterValue < inputStartCounterValue) {
        props.setError('incorrect value!')
        //alert('error')
        //props.setMessage(null)
    } else {
        props.setError(null)
        //props.setMessage('input correct value and press enter')
        //alert('nice')
    }
    const changeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputMaxCounterValue(+event.currentTarget.value)
        props.setMessage('enter values and press set')
        props.setEditMode(true)
        //props.setError(null)
        //checkErrors()
    }

    const changeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputStartCounterValue(+event.currentTarget.value)
        props.setMessage('enter values and press set')
        props.setEditMode(true)
    }

    const setButtonHandler = () => {
        props.setValues(inputMaxCounterValue, inputStartCounterValue)
        props.setMessage(null)
    }

    return (
        <div className={"wrapper"}>
            <div className={"setCounterWrapper"}>
                <div>max value: <input type={"Number"} value={inputMaxCounterValue} onChange={changeMaxValueHandler}/>
                </div>
                <div>start value: <input type={"Number"} value={inputStartCounterValue}
                                         onChange={changeStartValueHandler}/></div>


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
                <Button className={"class-1"} name={"set"}
                        disabled={inputMaxCounterValue < inputStartCounterValue || !props.editMode}
                        onClick={setButtonHandler}/>

            </div>
        </div>
    )
}
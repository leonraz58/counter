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
    error: string | null
}
export const SetCounter = (props: SetCounterPropsType) => {


    const [inputMaxCounterValue, setInputMaxCounterValue] = useState(props.maxValue)
    const [inputStartCounterValue, setInputStartCounterValue] = useState(props.startValue)

    let maxInputError = false
    let startInputError = false

    if (inputMaxCounterValue < inputStartCounterValue) {
        props.setError('incorrect value!')
        maxInputError = true
        startInputError = true
    } else {
        props.setError(null)
    }
    if (inputMaxCounterValue < 0) {
        props.setError('incorrect value!')
        maxInputError = true
    }

    if (inputStartCounterValue < 0) {
        props.setError('incorrect value!')
        startInputError = true
    }

    const changeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputMaxCounterValue(+event.currentTarget.value)
        props.setMessage('enter values and press set')
        props.setEditMode(true)
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
                <div>max value: <input className={maxInputError ? 'inputRed' : ''}
                                       type={"Number"}
                                       value={inputMaxCounterValue}
                                       onChange={changeMaxValueHandler}
                />
                </div>
                <div>start value: <input className={startInputError ? 'inputRed' : ''}
                                         type={"Number"}
                                         value={inputStartCounterValue}
                                         onChange={changeStartValueHandler}
                />
                </div>


            </div>
            <div className={"buttonsWrapper"}>
                <Button className={"class-1"} name={"set"}
                        disabled={!!props.error || !props.editMode}
                        onClick={setButtonHandler}/>

            </div>
        </div>
    )
}
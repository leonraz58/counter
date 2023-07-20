import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter} from './components/SetCounter';

function App() {

    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [counterValue, setCounterValue] = useState(startValue)
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        let valueAsString = localStorage.getItem('startValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
            setCounterValue(newValue)
        }
    },[])

    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('startValue', JSON.stringify(startValue))
    },[startValue])

    useEffect(()=>{
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    },[maxValue])


    const incCounterValue = () => {
        setCounterValue(counterValue + 1)
    }

    const resetCounterValue = () => {
        setCounterValue(startValue)
    }

    const setValues = (maxInputValue: number, startInputValue: number) => {
        if (startInputValue > maxInputValue) {
            alert('incorrect value!')
           // setError('incorrect value!')
        } else {
            //alert('nice work')
            setError(null)
            setMaxValue(maxInputValue)
            setStartValue(startInputValue)
            setCounterValue(startInputValue)
            setEditMode(false)

            localStorage.setItem('maxValue', JSON.stringify(maxValue))
        }
    }

    return (
        <div className="App">
            <SetCounter maxValue={maxValue}
                        startValue={startValue}
                        setValues={setValues}
                        setMessage={setMessage}
                        setError={setError}
                        editMode={editMode}
                        setEditMode={setEditMode}
                        error={error}
                        setMaxValue={setMaxValue}
                        setStartValue={setStartValue}
            />
            <Counter maxValue={maxValue}
                     startValue={startValue}
                     counterValue={counterValue}
                     incCounterValue={incCounterValue}
                     resetCounterValue={resetCounterValue}
                     error={error}
                     message={message}
                     editMode={editMode}

            />
        </div>
    );
}

export default App;

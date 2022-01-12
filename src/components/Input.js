import React, {useState} from "react";
import { useDebounce } from 'rooks';

export function Input(props) {
    const setInputValueDebounced = useDebounce(props.updateValue, 100)
    let textInput = React.createRef()

    return (
        <input
            type="text"
            placeholder="Введите название"
            ref={textInput}
            onChange={() => {
               setInputValueDebounced(textInput.current.value)
            }}
        />
    )
}
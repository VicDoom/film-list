import React, {useState} from "react";
import { useDebounce } from 'rooks';

export function Input(props) {
    const setInputValueDebounced = useDebounce(props.updateValue, 100)

    return (
        <input
            type="text"
            placeholder="Введите название"
            onChange={(e) => {
               setInputValueDebounced(e.target.value)
            }}
        />
    )
}
import {Input} from "./Input";
import {useEffect, useState} from "react";
import {List} from "./List";

export function SearchTable() {
    let [value, setValue] = useState('')

    return (
            <div className="form">
                <Input updateValue={setValue}/>
                <List value={value}/>
            </div>
    )
}
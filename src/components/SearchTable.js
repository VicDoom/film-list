import {Input} from "./Input";
import {useEffect, useState} from "react";
import {List} from "./List";

export function SearchTable() {
    let [value, setValue] = useState(null)

    useEffect(() => {
        console.log("Был изменен Input")
    })

    return (
        <div className="main">
            <Input updateValue={setValue}/>
            <List value={value}/>
        </div>
    )
}
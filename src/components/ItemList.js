import {useEffect} from "react";

export function ItemList(props) {
    useEffect(() => {
        return (
            () => {console.log(`Unmounted ${props.name}`)}
        )
    })
    useEffect(() => {
        console.log(`Mounted ${props.name}`)
    })
    return (
        <div className="form__list-item">
            <div className="ItemName">{props.name}</div>
            <div className="ItemAge">{props.year}</div>
        </div>
    )
}
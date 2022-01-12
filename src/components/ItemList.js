import {useEffect} from "react";

export function ItemList(props) {
    useEffect(() => {
        return (
            () => {console.log(`Unmounted ${props.name}`)}
        )
    })
    return (
        <div style={{display: "flex", gap: 20}}>
            <div className="ItemName">{props.name}</div>
            <div className="ItemAge">{props.year}</div>
        </div>
    )
}
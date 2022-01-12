export function ItemList(props) {
    return (
        <div style={{display: "flex", gap: 20}}>
            <div className="ItemName">{props.name}</div>
            <div className="ItemAge">{props.year}</div>
        </div>
    )
}
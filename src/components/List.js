import { ItemList } from "./ItemList";
import {useEffect, useState} from "react";

let allItems = [
    {name: "Fight Club", year: 1999},
    {name: "Home Alone", year: 1990},
    {name: "Dark knight", year: 2007}
]

export function List(props) {
    let items = []
    useEffect(() => {
        items = allItems.filter((item) =>
            item.name.includes(props.value)
        ).map((item) => <ItemList name={item.name} year={item.name}/>)
        console.log(items)
    })

    return items.length ? items : <div>Ничего не найдено</div>
}
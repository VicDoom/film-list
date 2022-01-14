import { ItemList } from "./ItemList";
import { useEffect, useState} from "react";

let allItems = [
    {name: "Fight Club", year: 1999},
    {name: "Home Alone", year: 1990},
    {name: "Dark knight", year: 2007}
]

let isStrIncludesSubstr = (str, substr) => {
    return str.toLowerCase().includes(substr.toLowerCase())
}

export function List(props) {
    let [items, setItems] = useState([])
    let response = '';

    useEffect(() => {
        setItems(allItems.filter((item) => {
                return isStrIncludesSubstr(item.name, props.value)
            }
        ).map((item) => <ItemList name={item.name} year={item.year} key={item.name}/>))
    }, [props])

    useEffect(() => {
        async function fetchData() {
            response = await fetch('https://jsonplaceholder.typicode.com/todos')
                .then((response) => response.text())
        }
        fetchData()
    }, [])

    return items.length ? <div className="form__list">{items}</div> : <div>Ничего не найдено</div>
}
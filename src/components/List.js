import { ItemList } from "./ItemList";
import { useEffect, useState} from "react";

let allItems = [
    {name: "Fight Club", year: 1999},
    {name: "Home Alone", year: 1990},
    {name: "Dark knight", year: 2007}
]

export function List(props) {
    let [items, setItems] = useState([])
    //let items = [];
    //let [response, setResponse] = useState([]);
    let response = '';

    setItems(allItems.filter((item) =>
        item.name.includes(props.value)
    ).map((item) => <ItemList name={item.name} year={item.year} key={item.name}/>))

    // items = allItems.filter((item) =>
    //     item.name.includes(props.value)
    // ).map((item) => <ItemList name={item.name} year={item.year} key={item.name}/>)
    console.log(items)

    useEffect(() => {
        async function fetchData() {
            response = await fetch('https://jsonplaceholder.typicode.com/todos')
                .then((response) => response.text())
                .then((json => console.log(json))
            )
        }
        fetchData()
    }, [])

    return items.length ? <div>{items}</div> : <div>Ничего не найдено</div>
}
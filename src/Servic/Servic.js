import { our } from "../components/FetchAll.js"
function GetAll() {
    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(data => {
        our.get = data
    })
}
export{
    GetAll
}
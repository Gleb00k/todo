const btn = document.querySelector('.btn_add')
const list = document.querySelector('.list')
const inputText = document.querySelector('.input')

let toDo

if(!localStorage.toDo){
    toDo = []
}else{
    toDo = JSON.parse(localStorage.getItem('toDo'))
}

btn.addEventListener('click', () => {
    let textValue = inputText.value
    toDo.push(textValue)
    console.log(toDo)
    addListItem()
    updateLocal()
})


const createElement = (text,index) =>{
    return `
    <li class="list_item">${text}
    <button class="btn_del" onclick="deleteElement(${index})">X</button></li>
    `   
}


const addListItem =()=>{
    list.innerHTML = ''
    if (toDo.length > 0){
        toDo.forEach((item,index) =>{
            list.innerHTML += createElement(item, index)
        })
    }
}
addListItem()

const updateLocal = ()=> {
    localStorage.setItem('toDo', JSON.stringify(toDo))
} 
const deleteElement = (index) =>{
    toDo.splice(index,1)
    addListItem()
    updateLocal()
}


const deleteAll = document.querySelector('.delete_items')

const deleteAllElements = () =>{
    toDo.splice(0,toDo.length)
    updateLocal()
}
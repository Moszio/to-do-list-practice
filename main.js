const write = document.getElementById(`a`)
const add = document.getElementById(`b`)
const container = document.getElementById(`container`)


add.addEventListener(`click`, () => {
 let createItem = document.createElement('li')
 let dltBtn = document.createElement(`button`)
 dltBtn.innerText = `Delete`
 createItem.innerText = write.value + ` `
 container.appendChild(createItem)
 createItem.append(dltBtn)
 write.value = ``
dltBtn.addEventListener(`click`, () => {
 createItem.remove()
 dltBtn.remove()
})
})

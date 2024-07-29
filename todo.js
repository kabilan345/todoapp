var input=document.getElementById("input")
var message=document.getElementById("message")

function update(){
    var list=document.createElement("li") //<li></li>
    list.innerHTML=input.value+"<button onclick='remove(event)'>delete</button>"+" <button onclick='change(this)' id='edit_btn'>edit</button>"
    message.append(list)
    input.value=''
}



function remove(event){
    event.target.parentElement.remove()
}

var currentItem=null
function change(event){
    currentItem=event.parentElement
    // var popup=document.getElementById("popup")
    // popup.style.display="block"
    currentItem.innerHTML=`<input type="text" id="editInput"> <button onclick="update2(event)">save</button> <button onclick="remove(event)">Delete</button>`
}

function update2(event){
    var input2=document.getElementById("editInput")
    var inputvalue=input2.value
    currentItem.innerHTML=inputvalue+"<button onclick='remove(event)' id='delete_btn'>delete</button>"+" <button onclick='change(this)' id='edit_btn'>edit</button>"
    // popup.style.display="none"
    input2.value=''
}
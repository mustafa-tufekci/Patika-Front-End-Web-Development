const myNodeList = document.getElementsByTagName('li');
const input = document.querySelector('#task');
const list = document.querySelector('#list');
const addTaskBtn = document.querySelector('.button');

for(let i = 0; i < myNodeList.length; i++){
    const spanDOM = document.createElement('span');
    const txt = document.createTextNode('\u00D7');
    spanDOM.classList.add('close','remove-task');
    spanDOM.appendChild(txt);
    myNodeList[i].appendChild(spanDOM);
}

const close = document.getElementsByClassName('remove-task');
for(let i = 0;i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display  = "none";
        console.log("span close");
    }
    
}

function createListElement(){
    const liDOM = document.createElement('li');
    let inputTrim = input.value.trim();

    if(inputTrim.length > 0){
        liDOM.innerHTML = inputTrim;
        list.appendChild(liDOM);
        input.value = "";
        $(".success").toast("show");
    } else {
        $(".error").toast("show");
    }

    const spanDOM = document.createElement('span');
    const txt = document.createTextNode('\u00D7');
    spanDOM.classList.add('close','remove-task');
    spanDOM.appendChild(txt);
    liDOM.appendChild(spanDOM);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
}

list.addEventListener('click',(event)=>{
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle("checked");
    }
});


addTaskBtn.addEventListener('click', createListElement);

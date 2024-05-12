let bubble = "";


for(let i =0;i<120;i++){
    bubble+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}

document.querySelector('#p-bottom').innerHTML = bubble;
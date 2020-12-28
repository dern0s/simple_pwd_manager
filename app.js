function doSomething(){
    let optionHash = document.getElementById('hash');
    let optionUnHash = document.getElementById('un-hash');
    
    if (optionHash.checked){
        hashIt();
    } else if (optionUnHash.checked){
        unHashIt();
    }
}

function hashIt(){

    sendToDom(processedString);
}


function unHashIt(){


    sendToDom(processedString);
}

function sendToDom(text){

    document.getElementById('hash-container').innerHTML += `<p class="text">result: ${text}</p>`;

}
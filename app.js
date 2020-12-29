function doSomething(){
    //first we get the checkbox to define the next steps
    let optionHash = document.getElementById('hash');
    let optionUnHash = document.getElementById('un-hash');
    
    //then we get the value from input
    rescuedString = document.getElementById('pwd').value;
    
    //check which action to make
    if (optionHash.checked && optionUnHash.checked){

        //if both are checked this error will be thrown
        sendToDom('both options were selected, try to check only one');

    } else if (optionHash.checked){
        
        //clear the input so we don't have both password and hashed
        //string on the page at the same time
        document.getElementById('pwd').value = '';
        
        hashIt(rescuedString);
    
    } else if (optionUnHash.checked){
        
        //clear the input so we don't have both password and hashed
        //string on the page at the same time
        document.getElementById('pwd').value = '';

        unHashIt(rescuedString);
    
    } else{
        
        //just because someone might click it without checking
        sendToDom('no option selected, try again');
    }
}

function hashIt(rescuedString){
    //declare an array to take into the inner loop
    let helpingArray = [];
    
    //here we'll transform the string into an array
    //so we can return it later
    for (let i = 0; i < rescuedString.length; i++){
        
        //as I said on README for the repo, it's a really
        //simple method for hashing, this is not
        //trustworthy to use online
        //but here we take the charcode at each char
        //and add 5 just because and store it on the array
        helpingArray.push(rescuedString.charCodeAt([i]) + 5);
    }

    //here we make a string with the results from the inner loop
    let processedString = helpingArray.join(' ');
    
    sendToDom(processedString);
}


function unHashIt(rescuedString){

    //create a new array to store the values of the rescued string
    let newArray = rescuedString.split(' ');
    //create an empty array to throw into the inner loop
    let helpingArray = [];

    //loop to unhash, basically turning the charcode into a
    //char again
    for (let i = 0; i < newArray.length; i++){
        
        //same thing as before, but reversed
        helpingArray.push(String.fromCharCode(newArray[i] - 5));
    
    }

    //and here's the string to be thrown to DOM
    let processedString = helpingArray.join('');

    sendToDom(processedString);
}

function sendToDom(text){

    //just send the text to DOM, there we have
    //a div with the id hash-container just for this
    //which will be replaced with every button press
    document.getElementById('hash-container').innerHTML = `<p class="text">result: ${text}</p>`;

}
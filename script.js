let computerSecret = parseInt(Math.random()*100);

let userInput;

function guess(){

    userInput = parseInt(document.
    querySelector("input").value);

    console.log(typeof userInput);
    if (userInput === computerSecret){
        alert("Congragulations!! YOU WON!");
    }else if (userInput > computerSecret) {
        alert("Too High");
    }else {
        alert("Too Low");
    }

}


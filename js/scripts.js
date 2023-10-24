function sentenceInput (event){
    event.preventDefault();
    const input = document.getElementById("input").value;
    const result = document.getElementById("result");
    const sentenceArray = input.split("");
    //result.innerText = sentenceArray
    const newWordsArray = [];
    sentenceArray.forEach(function(word){
    if (word.length >= 3){
        newWordsArray.push(word);
        result.innerText = newWordsArray.join(",");

    }
   
});
}



window.addEventListener("load",function(){
    const form = document.getElementById("sentence-form")
    form.addEventListener("submit", sentenceInput);
});
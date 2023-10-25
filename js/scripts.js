function sentenceInput (event){
    event.preventDefault();
    const input = document.getElementById("input").value;
    const result = document.getElementById("result");
    const sentenceArray = input.split(" ");
    //result.innerText = sentenceArray
    const newWordsArray = [];
    sentenceArray.forEach(function(word){
       if (word.length >= 3){
         newWordsArray.push(word);
         //result.innerText = newWordsArray.join(" ");
    const reversedWords = [];
    for (let i = sentenceArray.length-1; i >=0; i--){
        const valueAtIndex = sentenceArray[i]
        reversedWords.push(valueAtIndex);
        result.innerText = reversedWords
    }

    }
   
});
}



window.addEventListener("load",function(){
    const form = document.getElementById("sentence-form")
    form.addEventListener("submit", sentenceInput);
});
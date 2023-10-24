function sentenceInput (event){
    event.preventDefault();
    const input = document.getElementById("input").value;
    const result = document.getElementById("result");
    result.innerText = input;
}


window.addEventListener("load",function(){
    const form = document.getElementById("sentence-form")
    form.addEventListener("submit", sentenceInput);
});
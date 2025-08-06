let bodyElement = document.body;
let colorButton = document.getElementById('changeColorBtn');

colorButton.addEventListener('click', function(){
    bodyElement.style.backgroundColor = "blue";
    alert("wow, what a nice color");
});

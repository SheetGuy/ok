var preferences = `{
   "editorsPreferences": {
      "language": "JavaScript",
      "theme": "Dracula",
      "font": "Monospace",
      "title": "untitled",
      "fontSize": 30,
      "lineNumber": false,
      "borderRadius": 5,
      "border": true
   },
   "imagesPreferences": {
      "background": true,
      "waterMark": true
   }
}`

const codeArea = document.getElementById('code-area');
var jsonPreferences = JSON.parse(preferences);

function changePreferences() {
   codeArea.style.borderRadius = jsonPreferences.editorsPreferences.borderRadius + "px";
}


// Obter a referência da div
var div = document.querySelector(".menu-content");

// Obter todas as referências dos elementos dentro da div
var elements = div.querySelectorAll("input, select");

// Adicionar um ouvinte de evento onchange para cada elemento dentro da div
elements.forEach(function(element) {
   element.onchange = function() {
      // Seu código aqui
      console.log("Valor alterado para: " + element.value);
   };
});


changePreferences();

//console.log(jsonPreferences.editorsPreferences.borderradius)
//obj.editorsPreferences.language = "Python";
//console.log(obj)

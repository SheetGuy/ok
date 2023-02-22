function switchToggle(switchClass) {
   var element = document.getElementById(switchClass);
   element.classList.toggle("on");
}

const selectLanguage = document.querySelector('.select-language');

var listLanguages = [
   { item: "Assembly Language", value: "assembly language" },
   { item: "Bash", value: "bash" },
   { item: "C", value: "c" },
   { item: "C++", value: "c++" },
   { item: "C#", value: "c#" },
   { item: "Clojure", value: "clojure" },
   { item: "COBOL", value: "cobol" },
   { item: "CoffeeScript", value: "coffeescript" },
   { item: "CSS", value: "css" },
   { item: "D", value: "d" },
   { item: "Dart", value: "dart" },
   { item: "Elixir", value: "elixir" },
   { item: "Erlang", value: "erlang" },
   { item: "Go", value: "go" },
   { item: "Groovy", value: "groovy" },
   { item: "HTML", value: "html" },
   { item: "Haskell", value: "haskell" },
   { item: "Java", value: "java" },
   { item: "JavaScript", value: "javascript" },
   { item: "Julia", value: "julia" },
   { item: "Kotlin", value: "kotlin" },
   { item: "Lua", value: "lua" },
   { item: "Matlab", value: "matlab" },
   { item: "Objective-C", value: "objective-c" },
   { item: "Pascal", value: "pascal" },
   { item: "Perl", value: "perl" },
   { item: "PHP", value: "php" },
   { item: "PowerShell", value: "powershell" },
   { item: "Prolog", value: "prolog" },
   { item: "Python", value: "python" },
   { item: "R", value: "r" },
   { item: "Ruby", value: "ruby" },
   { item: "Rust", value: "rust" },
   { item: "Scala", value: "scala" },
   { item: "Scheme", value: "scheme" },
   { item: "Smalltalk", value: "smalltalk" },
   { item: "SQL", value: "sql" },
   { item: "Swift", value: "swift" },
   { item: "TypeScript", value: "typescript" },
   { item: "XML", value: "xml" },
   { item: "XQuery", value: "xquery" },
   { item: "YAML", value: "yaml" }
];

var listThemes = [
   { item: "Ayu Mirage", value: "ayu-mirage" },
   { item: "City Lights", value: "city-lights" },
   { item: "Cobalt2", value: "cobalt2" },
   { item: "Dracula", value: "dracula" },
   { item: "Gruvbox", value: "gruvbox" },
   { item: "Material Theme", value: "material-theme" },
   { item: "Monokai", value: "monokai" },
   { item: "Nord", value: "nord" },
   { item: "Oceanic Next", value: "oceanic-next" },
   { item: "One Dark Pro", value: "one-dark-pro" },
   { item: "Shades of Purple", value: "shades-of-purple" },
   { item: "Solarized Dark", value: "solarized-dark" },
   { item: "SynthWave '84", value: "synthwave84" },
   { item: "Tomorrow Night", value: "tomorrow-night" },
   { item: "Visual Studio Dark", value: "visual-studio-dark" },
   { item: "Zenburn", value: "zenburn" },
   { item: "Base16", value: "base16" },
];

var listFonts = [
   { item: "Monospace", value: "monospace" },
   { item: "Sans serif", value: "sans-serif" },
   { item: "B612 Mono", value: "b612-mono" },
   { item: "Source Code", value: "source-code" },
];


var language = $('.select-language').selectize({
   persist: false,
   maxItems: 1,
   copyClassesToDropdown: false,
   options: listLanguages,
   labelField: "item",
   valueField: "value",
   sortField: 'item',
   searchField: 'item',
   create: true,
   render: {
      option_create: function(data, escape) {
         return '<div class="create">No results for<strong> ' + escape(data.input) + '</strong>&hellip;</div>';
      }
   },
   onChange: function(value) {
      var unique = true;

      for (var i = 0; i < listLanguages.length; i++) {
         if (listLanguages[i].item == value) {
            unique = false;
            break;
         }
      }

      if (value.length > 0 && unique) {
         language.next('.selectize-control').find('.selectize-input').addClass('user-created');
      }
   },
});
var theme = $('.select-theme').selectize({
   persist: false,
   maxItems: 1,
   copyClassesToDropdown: false,
   options: listThemes,
   labelField: "item",
   valueField: "value",
   sortField: 'item',
   searchField: 'item',
   create: true,
   render: {
      option_create: function(data, escape) {
         return '<div class="create">No results for<strong> ' + escape(data.input) + '</strong>&hellip;</div>';
      }
   },
   onChange: function(value) {
      var unique = true;

      for (var i = 0; i < listThemes.length; i++) {
         if (listThemes[i].item == value) {
            unique = false;
            break;
         }
      }

      if (value.length > 0 && unique) {
         theme.next('.selectize-control').find('.selectize-input').addClass('user-created');
      }
   },
});
var font = $('.select-font').selectize({
   persist: false,
   maxItems: 1,
   copyClassesToDropdown: false,
   options: listFonts,
   labelField: "item",
   valueField: "value",
   sortField: 'item',
   searchField: 'item',
   create: true,
   render: {
      option_create: function(data, escape) {
         return '<div class="create">No results for<strong> ' + escape(data.input) + '</strong>&hellip;</div>';
      }
   },
   onChange: function(value) {
      var unique = true;

      for (var i = 0; i < listFonts.length; i++) {
         if (listFonts[i].item == value) {
            unique = false;
            break;
         }
      }

      if (value.length > 0 && unique) {
         font.next('.selectize-control').find('.selectize-input').addClass('user-created');
      }
   },
});

language[0].selectize.setValue('javascript');
theme[0].selectize.setValue('dracula');
font[0].selectize.setValue('monospace');

language.on('change', function() {
   var test = language[0].value;
   alert(test);
});

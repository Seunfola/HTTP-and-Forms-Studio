
    let actions = {
        "google": "https://www.google.com/search",
        "duckduckgo": "https://duckduckgo.com/tl5.js",
        "bing": "https://bing.com/search",
        "ask": "https://www.ask.com"
     };
    
     window.addEventListener('load', function(){
        let engines = document.getElementsByName('engine');
        let form = document.getElementById('searchForm');
        let button = document.getElementById("btn");
        
        function getAction() {
            for (i = 0; i < engines.length; i++) {
              if (engines[i].checked) {
                return engines[i].value
              }
            }
        };
        
        button.addEventListener('click', function() {
             form.action = actions[getAction()]
             event.preventDefault();
          })
        }
    );


document.getElementById("findButton").onclick = function() {
    let typedText = document.getElementById("input").value;
    function alphabetize(a) {
        return a.toLowerCase().split("").sort().join("").trim();
       }
   let anagrams = []
   
   const sorted = alphabetize(typedText);
    words.forEach(function(words) {
        let wsort= alphabetize(words);
        if (wsort===sorted) {
            anagrams.push(words);
        
        }})
        let anagramslist = document.createElement("div");
        let sort = document.createTextNode(anagrams);
        anagramslist.appendChild(sort);
        document.getElementById("block").appendChild(anagramslist);
    }
    
    
 
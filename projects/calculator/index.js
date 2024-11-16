const buttonDiv = document.getElementById("buttonDiv");
let result = document.getElementById("resultWindow");
let bracketOpened = false;

buttonDiv.addEventListener("click", event => {
    switch (event.target) {
        case buttonDiv.children[0]:
            result.value = "";
            break;
        case buttonDiv.children[1]:
            console.log(result.value.charAt(result.value.length - 1));
            
            console.log(Number.isInteger(result.value.charAt(result.value.length - 1)));
            
            if (Number.isInteger(result.value.charAt(result.value.length - 1))) {
                result.value += "*(";
                bracketOpened = true;
            }
            break;
        case buttonDiv.children[2]:
            result.value = result.value.slice(0, (result.value.length - 1));
            break;
        case buttonDiv.children[3]:
            result.value += "+";
            break;
        case buttonDiv.children[5]:
            result.value += "1";
            break;
        case buttonDiv.children[6]:
            result.value += "2";
            break;
        case buttonDiv.children[7]:
            result.value += "3";
            break;
        case buttonDiv.children[8]:
            result.value += "-";
            break;
        case buttonDiv.children[10]:
            result.value += "4";
            break;
        case buttonDiv.children[11]:
            result.value += "5";
            break;
        case buttonDiv.children[12]:
            result.value += "6";
            break;
        case buttonDiv.children[13]:
            result.value += "*";
            break;
        case buttonDiv.children[15]:
            result.value += "7";
            break;
        case buttonDiv.children[16]:
            result.value += "8";
            break;
        case buttonDiv.children[17]:
            result.value += "9";
            break;
        case buttonDiv.children[18]:
            result.value += "/";
            break;
        case buttonDiv.children[20]:
            result.value += ".";
            break;
        case buttonDiv.children[21]:
            result.value += "0";
            break;
        case buttonDiv.children[22]:
            result.value += "%"
            break;
        case buttonDiv.children[23]:
            if (result.value != "") {
            result.value = String(eval(result.value));
            }
            break;
        
    }
    
});
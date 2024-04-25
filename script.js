var buttons = document.querySelectorAll('.button');
var display_area = document.getElementById('display');
var operator = null;
var operand1 = null;
var operand2 = null;

// Handling arithmetic operations using mouse click
for (var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        var values = this.getAttribute('data-value');
        if (values == '+'){
            if (display.innerText == ""){
                return;
            }else{
                operator = values;
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
            }
        }else if (values == '-'){
            if (display.innerText == ""){
                return;
            }else{
                operator = values;
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
            }
            
        }else if (values == '/'){
            if (display.innerText == ""){
                return;
            }else{
                operator = values;
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
            }
        
        }else if (values == '*'){
            if (display.innerText == ""){
                return;
            }else{
                operator = values;
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
            }

        }else if (values == '%'){
            if (display.innerText == ""){
                return;
            }else{
                operand1 = parseFloat(display.textContent);
                display.innerText = operand1/100;
            }

        }else if (values == '+-'){
            if (display.innerText == ""){
                return;
            }else{
                var changeValue = - parseFloat(display.textContent);
                display.innerText = changeValue.toString();
            }
        
        }else if (values == 'C'){
            display.innerText = "";
            operator = null;
            
        }else if(values == '='){
            if (operand1 != null && operator != null){
                operand2 = parseFloat(display.textContent);
                if (operator == "/" && operand2 == 0){
                    display.innerText = "Error";
                    return;
                }
                display.innerText = eval(operand1 + operator + operand2);
                
            }
            return;

        }else {
            display.innerText += values;

        }
    })
}

// Handling Arithmetic operation using keypress

document.addEventListener('keypress', function(event){
    // var values = this.getAttribute('data-value');
    console.log(event.key);
    
    if (event.key == '+'){
        if (display.innerText == ""){
            return;
        }else{
            operator = event.key;
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }
    }else if (event.key == '-'){
        if (display.innerText == ""){
            return;
        }else{
            operator = event.key;
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }
        
    }else if (event.key == '/'){
        if (display.innerText == ""){
            return;
        }else{
            operator = event.key;
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }
    
    }else if (event.key == '*'){
        if (display.innerText == ""){
            return;
        }else{
            operator = event.key;
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }

    }else if (event.key == '%'){
        if (display.innerText == ""){
            return;
        }else{
            operand1 = parseFloat(display.textContent);
            display.innerText = operand1/100;
        }

    }else if (event.key == 'z'){
        if (display.innerText == ""){
            return;
        }else{
            var changeValue = - parseFloat(display.textContent);
            display.innerText = changeValue.toString();
        }
    
    }else if (event.key == 'c'){
        display.innerText = "";
        operator = null;
        
    }else if(event.key == '=' || event.key == "Enter"){
        if (operand1 != null && operator != null){
            operand2 = parseFloat(display.textContent);
            if (operator == "/" && operand2 == 0){
                display.innerText = "Error";
                return;
            }
            display.innerText = eval(operand1 + operator + operand2);
            
        }

    }else {
        
        display.innerText += event.key;
    }
})
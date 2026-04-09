// <!-- JS- javascript added in HTML structure -->
        let display = document.getElementById("display");
        // multiple function to write - pressValue function
        function pressValue(value){
            display.value += value;
        }
        // clear-display function
        function clearDisplay(){
            display.value = "";
        }
        // deleteLast function
        function deleteLast() {
            display.value = display.value.slice(0, -1);
        }
        // calculate function to show the result
        function resultCalculate() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
        // squareRoot function
        function squareRoot(){
            display.value=Math.sqrt(display.value);
        }

        // cubeRoot function
        function cubeRoot(){
            display.value=Math.cbrt(display.value);
        }
        // power value function
        function powerValue(){
            display.value +="**";
        }
        // change sign value function
        function changeSign(){
            display.value=display.value *-1;
        }
        // squareValue function
        function squareValue(){
            display.value= Math.pow(display.value,2);
        }
                   
    
const buttons = ["(",")","C","^","7","8","9","4","5","6","1","2","3","0","+","-","*",".","=","/","←"]
        const allButtons = document.querySelectorAll("button")
        const inputbox = document.getElementById('inputbox')
        
        function sub() {
            fetch('http://localhost:5000/eval', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({"expression": inputbox.value})
            })
            .then(res => res.json())
            .then(data => inputbox.value = data.result)
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === 'C' || event.key === 'c') {
                inputbox.value = "";
            }
            else if (event.key === '=' || event.key === 'Enter')  {
                sub();
            }
            else if (event.key === 'Backspace') {
                inputbox.value = inputbox.value.slice(0, -1);
                event.preventDefault();
            }
            else if (buttons.includes(event.key)) {
                inputbox.value += event.key;
            }
        })

        allButtons.forEach(button => {
            button.addEventListener("click", () => {
                const key = button.id;

                if (key === 'C') {
                    inputbox.value = "";
                }
                else if (key === '=') {
                    sub();
                }
                else if (key == 'bs') {
                    inputbox.value = inputbox.value.slice(0, -1);
                }
                else {
                    inputbox.value += key;
                }
            })
        })
const readline = require("readline");
const rl = readline.createInterface({input : process.stdin,
                            output : process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

// the following first parameter in question() is an
// string interpolation(template literal) that is
// like the python string format mathod
// but remember if you want to use it then
// mut put your string in `` this not in "" or '' 
rl.question(`What is ${ num1 } + ${ num2 } ?\n`,
    (userInput) => {
        // console.log("working");
        if(userInput.trim() == answer){
            rl.close();
        }
        else{
            // console.log("Do math perfectly and then put your ans again");
            rl.setPrompt("Do math perfectly and then put your ans again\n");
            rl.prompt();

            //again take input
            rl.on("line", (userInput) => {
                if(userInput.trim() == answer){
                    rl.close();
                }
                else{
                    rl.setPrompt(`Your number is ${ userInput }. Again Wrong!!! Put it again\n`);
                    rl.prompt();
                }
            })
        }
    });

rl.on("close", () => {
    console.log("Correct!!!");
})

let input = prompt("what do you like to do?");
const todos = ["Collect eggs", " clean litter box"];

while (input !== 'quit' && input !== 'q') {
    
    if (input === "list") {
        console.log('*************')

        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);

        }
        console.log('*************')
    } else if (input === "new"){

        const newTodo = prompt ("okay, what is the new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);

    }else if (input === "delete"){
        const index = parseInt(prompt("Okay, Enter an Index to delete:"));

        if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`Okay, Deleted ${deleted[0]}`);

        } else{
            console.log("unknown index")
        }
    }
    input = prompt("what do you like to do?")
}
console.log("Okay! you quite the app!")
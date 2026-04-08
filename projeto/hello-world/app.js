const theme = "azul";
const tasks = ["Estudar Git", "Fazer exercício da UFPE"];
console.log("Minhas tarefas:", tasks);
function addTask(task) {
    tasks.push(task);
    console.log("Tarefa adicionada:", task);
}
addTask("Aprender Commits Semânticos");
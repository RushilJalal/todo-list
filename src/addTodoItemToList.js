import todoList from "./todoList";
import createTodoItem from "./createTodoItem";

function addTodoItemToList() {
    const todoItem = createTodoItem("Buy surf", "buy from campus store", "2024-03-01", "high");
    todoList.push(todoItem);

    console.log(todoList);
}

export default addTodoItemToList;




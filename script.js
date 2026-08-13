const todo_input = document.querySelector(".input-acceptor");
const todo_list_container = document.querySelector(".todo-container");

let todo = JSON.parse(localStorage.getItem("todo"));

function todo_render() {
  let todo_array = "";
  todo.forEach((todos, index) => {
    todo_array += ` 
         <div class="individual-todo">
          <h3>${todos}</h3>
          <div>
            <button 
              class="button delete" 
              onclick="deleteTodo(${index})"
            >delete</button>
            <button class="button" onclick="move_up(${index})">👆️</button>
            <button class="button" onclick="move_down(${index})">👇️</button>
          </div>
        </div>
        `;
    // console.log(todo_html);
    // todo.push(todo_html);
  });
  todo.length === 0
    ? (todo_list_container.innerHTML =
        "<h2 style='font-size: 30px; text-transform: capitalize; font-family: arial;'>add something to see your todo</h2>")
    : (todo_list_container.innerHTML = todo_array);
}
todo_render();

function deleteTodo(index) {
  todo.splice(index, 1);
  console.log(todo);
  todo_render();
  localStorage.setItem("todo", JSON.stringify(todo));
}
function add_todo() {
  if (todo_input.value) {
    todo.push(todo_input.value);
    todo_render();
    document.querySelectorAll(".individual-todo").forEach((element) => {
      element.classList.add("animation-effect");
    });
  }
  todo_input.value = "";

  localStorage.setItem("todo", JSON.stringify(todo));
}

function move_down(index) {
  if (index < todo.length - 1) {
    [todo[index], todo[index + 1]] = [todo[index + 1], todo[index]];
  }
  localStorage.setItem("todo", JSON.stringify(todo));
  todo_render();
}
function move_up(index) {
  if (index > 0) {
    [todo[index], todo[index - 1]] = [todo[index - 1], todo[index]];
  }
  localStorage.setItem("todo", JSON.stringify(todo));
  todo_render();
}
// console.log(todo_render());

// alert('Hello World!');
// $('#wd-todo').append(`
//    <div class="container">
//        <h1>Todo example</h1>
//    </div>
// `);
import TodoList from "./TodoList.js";
// console.log(TodoList)
$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${TodoList()}
   </div>
`);

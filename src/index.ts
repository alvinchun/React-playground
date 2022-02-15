import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1'

const response = axios.get(url).then(res => {
  console.log(res.data);

  //type checking
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  const todo = res.data as Todo

  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  console.log(`
      The Todo with ID: ${id}
      has ${title} and ${completed}

  `);

})
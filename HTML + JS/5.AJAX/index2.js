// AJAX
// 1. Get
// 2. Post
// 3. Put
// 4. Delete

// Server

// 1. All Data Types

// {
//   sdf:
// }

// // PHP
// $var = [
//   "user" => [
//     "firstName": "Babur"
//   ]
// ]

// // JAVA
// class User {
//   firstName: strin = "Babur";
// }

// JSON (JS Object Notation)

// const jsonStr = `
// {
//   "company": "Codiyf",
//   "type": "LLC",
//   "employees":[
//       {"firstName":"John", "lastName": "Doe"},
//       {"firstName":"Anna", "lastName":"Smith"},
//       {"firstName":"Peter", "lastName":"Jones"}
//   ]
// }
// `;
// const jsObj = JSON.parse(jsonStr);
// console.log(jsObj);

// const user = {
//   login: `shoaziz123@gmail.com`,
//   password: `1234578sh`,
// };

// console.log(JSON.stringify(user));

// DATABASE

const todosJSON = `
[
  {
    "userId": null,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
]
`

const todos = JSON.parse(todosJSON)

const todosWrapper = document.querySelector('#todos__wrapper')

let todosHTML = ''

for (let todo of todos) {
  todosHTML += `<label for="todo${todo.id}" | class="flex items-center">
      <input
        type="checkbox"
        name="todo${todo.id}"
        id="todo${todo.id}"
        class="h-10 w-10"
        ${todo.completed ? 'checked' : ''}
        // onclick="toggle('todo${todo.id}')" // TODO Toggle
      />

      <p class="font-bold pl-5 text-3xl ${
        todo.completed ? 'line-through' : ''
      }">${todo.title}</p>
  </label>
  `
}

todosWrapper.innerHTML = todosHTML

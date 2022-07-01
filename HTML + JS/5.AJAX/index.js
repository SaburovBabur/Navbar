// =====================
//        JSON
// =====================

const JSONstr = `{
  "company": "Codiyf",
  "type": "LLC",
  "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
  ]
}`;

const jsOBJECT = {
  company: 'Codiyf',
  type: 'LLC',
  employees: [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Anna', lastName: 'Smith' },
    { firstName: 'Peter', lastName: 'Jones' },
  ],
};

// jsOBJECT.employees[0].firstName



// =============== WHY JSON? =============== //
`
=========

1. Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

2. A common use of JSON is to exchange data to/from a BACKEND.

3. JSON is connector between Frontend and Backend

=========
`;

// =====
// JSON to JS-OBJECT
// =====

JSON.parse();

// =====
// JS-OBJECT => JSON
// =====

JSON.stringify();

// ======================
//    JSON is STRING 💡
// ======================

typeof JSON.stringify({ name: 'Babur', age: 25 }); // string

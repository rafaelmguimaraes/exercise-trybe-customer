const INITIAL_STATE = {
  auth: {
    usersList: [
      {
        name: "admin",
        email: "admin@gmail.com",
        password: "admin123"
      },
      {
        name: "rafa",
        email: "rafa",
        password: "rafa"
      }
    ],
    currentUser: {},
    isLogged: false
  },
  customerList: [{
    id: 11,
    name: "Testing Name",
    age: 99,
    email: "testing@test.com"
  },
  {
    id: 12,
    name: "Testing Name",
    age: 99,
    email: "testing@test.com"
  },]
};

export default INITIAL_STATE;
  
// MOCK CUSTOMERS
// import { v4 as uuidv4 } from "uuid";
 /* {
      id: uuidv4(),
      name: "Testing Name",
      age: 99,
      email: "testing@test.com"
    },
    {
      id: uuidv4(),
      name: "Testing Name",
      age: 99,
      email: "testing@test.com"
    },
    {
      id: uuidv4(),
      name: "Testing Name",
      age: 99,
      email: "testing@test.com"
    },
    {
      id: uuidv4(),
      name: "Testing Name",
      age: 99,
      email: "testing@test.com"
    },
    {
      id: uuidv4(),
      name: "Testing Name",
      age: 99,
      email: "testing@test.com"
    },
    {
      id: uuidv4(),
      name: "Testing Name",
      age: 99,
      email: "testing@test.com"
    },
    {
      id: uuidv4(),
      name: "Testing Name",
      age: 99,
      email: "testing@test.com"
    },
    {
      id: uuidv4(),
      name: "Testing Name",
      age: 99,
      email: "testing@test.com"
    }, */

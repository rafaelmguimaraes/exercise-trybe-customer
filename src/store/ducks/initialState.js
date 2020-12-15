import { v4 as uuidv4 } from "uuid";

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
  customerList: [
    {
      id: uuidv4(),
      name: "Ziraldo",
      age: 60,
      email: "ziraldog@test.com"
    },
    {
      id: uuidv4(),
      name: "Tadeu",
      age: 30,
      email: "tadeu@test.com"
    },
    {
      id: uuidv4(),
      name: "Filó",
      age: 22,
      email: "filomena@test.com"
    },
    {
      id: uuidv4(),
      name: "Aderbal",
      age: 43,
      email: "aderbal@test.com"
    },
  ],
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

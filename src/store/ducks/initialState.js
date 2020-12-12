// import { v4 as uuidv4 } from "uuid";

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
};

export default INITIAL_STATE;
  


import axios from "axios";
<<<<<<< HEAD
// import { json } from "express/lib/response";
=======
>>>>>>> main

// this file holds your frontend network request adapters
// think about each function as a service that provides data
// to your React UI through AJAX calls

// for example, if we need to display a list of users
// we'd probably want to define a getUsers service like this:

/* 
  export async function getUsers() {
    try {
      const { data: users } = await axios.get('/api/users')
      return users;
    } catch(err) {
      console.error(err)
    }
  }
*/

export async function getAPIHealth() {
  try {
    const { data } = await axios.get("/api/health"); // can use fwtch
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}
<<<<<<< HEAD
export const registerUser = async (username, password) => {
  try {
    const response = await fetch("/api/users/register", {
=======
// export const registerUser = async (username, password) => {
//   try {
//     const response = await axios.get("/api/users/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ user: { username, password } }),
//     });
//     const data = await response.json();
//     localStorage.setItem("token", data.data.token);
//     return data.data.token;
//   } catch (error) {
//     console.error(error);
//   }
// };
// export const loginUser = async (username, password) => {
//   try {
//     const response = await axios.get("/api/users/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         user: { username: username, password: password },
//       }),
//     });
//     const data = await response.json();
//     localStorage.setItem("token", data.data.token);
//     return data.data.token;
//   } catch (error) {
//     console.error(error);
//   }
// };

//    api/users/login

export async function loginUser(username, password) {
  try {
    // Post request to login route
    const response = await axios.get(`/users/login`, {
>>>>>>> main
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
<<<<<<< HEAD
      body: JSON.stringify({ user: { username, password } }),
    });
    const data = await response.json();
    localStorage.setItem("token", data.data.token);
    return data.data.token;
  } catch (error) {
    console.error(error);
  }
};
export const loginUser = async (username, password) => {
  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: { username: username, password: password },
      }),
    });
    const data = await response.json();
    localStorage.setItem("token", data.data.token);
    return data.data.token;
  } catch (error) {
    console.error(error);
  }
};

//  api/users/login
=======
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password,email) {

  try {
    console.log(username+" "+password+" "+email+"axio")
    // Post request to API to add user
    const response = await fetch(`/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Sending username and password object in the req.body
      body: JSON.stringify({
        username:username,
        password:password,
        email:email
      }),
    });
    console.log(response,"axio")
    // Parsing the returned json object
    const data = await response.json();
    return data;
  } catch (error) {
    console.error( error);
  }
}
export async function getMe(token) {

  try {
    const response = await fetch(`/api/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error( error);
  }
}
>>>>>>> main

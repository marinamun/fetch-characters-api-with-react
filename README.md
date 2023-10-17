![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Fetch CRUD exercise (with React)

## Introduction

![image](https://user-images.githubusercontent.com/23629340/36733655-8c9903fa-1bd1-11e8-82f7-d425ab140c09.png)

In this exercise, we will use all what we have learned about APIs and how to connect an application to them through **Fetch**.

## Requirements

- Clone this repo
- `cd` into the backend folder and run `npm i` to install the dependencies.
  - Run `npm run dev` in the backend or `nodemon` to start the project
    - _Note_: The `env` file is available for you in the repo.
- Open another terminal from the root of the project and `cd` into the frontend folder then run `npm i` to install the dependencies.
  - Run `npm run dev` in the frontend to start the project
    - _Note_: The `env` file is available for you in the repo.

## Submission

- Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

## Instructions

The base URL is **`https://ih-crud-api.herokuapp.com`**. This API allows us to get some data from it, create new documents in its _characters_ collection, update existing characters as well as delete them from the database. Every character has these properties:

- `name` - String,
- `occupation` - String,
- `weapon` - String,
- `debt` - Boolean.

Here are the relevant API endpoints (routes) that the Characters API provides to use and which we will be using:

| Route             | HTTP Verb | Description                     |
| ----------------- | --------- | ------------------------------- |
| `/characters`     | GET       | List of all characters          |
| `/characters/:id` | GET       | Details of a specific character |
| `/characters`     | POST      | Create a new character          |
| `/characters/:id` | PUT/PATCH | Update a specific character     |
| `/characters/:id` | DELETE    | Delete a specific character     |

:::info
All these routes must be prefixed with the API's base URL: **`https://ih-crud-api.herokuapp.com`**.
:::

The way how the endpoints are presented in the table above is the usual approach you will find in the majority API documentations. The base URL will be given once, and it is considered that it will be prefixed to each endpoint by default. For example, the full URL of the `/characters` endpoint would be `https://ih-crud-api.herokuapp.com/characters`.

<br>

**_Reminder_**: Whenever you use the data provided by the 3rd party APIs, **you should always log the response of an API** to check the structure of the data. Knowing the structure of the response will allow us to capture the right properties and to know what type of data we are working with.

<br>

## General setup

- Create `characters.routes.js` file inside the `routes` folder
  - Don't forget to link these newly created routes to the `index.routes.js`
- Create the following React pages:
  - `CreateCharacter.jsx`
  - `EditCharacter.jsx`

### List all characters

- You already have a **GET** route in the `characters.routes.js` file to get the list of all characters using the `https://ih-crud-api.herokuapp.com/characters` endpoint.

### Character Details Page

- You already have a **GET** route in the `characters.routes.js` file to get the details of a character using the `https://ih-crud-api.herokuapp.com/characters/:id` endpoint.

### Create a new character

- Create a **POST** route `/characters` in the `characters.routes.js` file (remember that the router is registered as `/characters` already).
- Inside, use Fetch to **POST** a newly created character's object using the `https://ih-crud-api.herokuapp.com/characters` endpoint.
- In the frontend, redirect to `/characters` after the creation of the new document to see the full list of characters and your new character on it.

### Update a character

- Make sure the form is pre-loaded with the details of a specific character you want to update. The form should send a **PUT** request with a payload to `/characters/:id` route.
- Create a **PUT** route `/characters/:id` in the `characters.routes.js` file (remember that the router is registered as `/characters` already).
- Inside, use Fetch to **PUT**/**PATCH** an updated character's object using the `https://ih-crud-api.herokuapp.com/characters/:id` endpoint.
- In the frontend, redirect to `/characters/:id` to see the updated character details and the changes you made.

### Delete a character

- Create a button in the `CharacterDetails.jsx` file and set it to use a callback on a click event to send a **DELETE** request to the route `/characters/:id`.
- After that, create a **DELETE** route `/characters/:id` in the `characters.routes.js` file.
- Inside, use Fetch to **DELETE** a character object using the `https://ih-crud-api.herokuapp.com/characters/:id` endpoint.
- In the frontend, redirect to `/characters` to see the full list of characters and to notice that the deleted character is not on the list.

<br>

That would be all!

<br>

Happy coding! :heart:

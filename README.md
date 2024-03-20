# user-management

## Deployment

### [Client Deployed at Vercel 🔗](https://user-management-pi-rouge.vercel.app/)

### [Server Deployed at Render 🔗](https://user-management-yc09.onrender.com/)

## Preview

https://github.com/irahuldutta02/user-management/assets/78687135/5f9576af-e31c-4c04-8032-8d56db4db54e

## Description

### User Management System

- You can add user
- You can delete user
- You can update user
- You can search user

### Scope of Improvement

- The backend error handling can be improved
- Authorization and Authentication can be added
- The project can be improved with state management tools like Redux or Recoil
- The UI can be improved further

### FYI

- The backend is deployed on Render on free tier. It may take up to 50 seconds or few more to up the server depending upon your internet speed initially. It is not a performance issue.

![01](https://github.com/irahuldutta02/user-management/assets/78687135/6f9fd8eb-0303-441c-916f-0ff7b346787f)

## Local Setup

### 1. Clone the repo

```bash
git clone https://github.com/irahuldutta02/user-management.git
cd user-management
```

### 2. Set up the env for server and client

```
#server
PORT=5000
MONGO_URI=YOUR_MONGO_URI
```

```
#client
VITE_SERVER_URL=http://localhost:5000
```

### 3. Go to server and Client and turn up the server

```bash
cd server
npm install
npm run dev
```

```bash
cd server
npm install
npm run dev
```

### 3. Import the Post man collection for server

[Postman collection](./postman-collection/user-mangement.postman_collection.json)

- Routes
  - GET / [Check if server is up]
  - GET /api/getusers [Get all users]
  - GET /api/getuser/:id [Get user by id]
  - PUT /api/updateuser/:id [Update user by id]
  - POST /api/createuser [Create user]
  - DELETE /api/delete/:id [Delete user by id]

### 4. Open the browser and go to

```
http://localhost:5173
```

## Tech Stack

- React
- Tailwind CSS
- Node.js
- Express

### Packages

- axios
- mongoose
- react hot toast

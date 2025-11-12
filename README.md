# 🧩 Product Manager

A full-stack **MERN** application (MongoDB, Express, React, Node.js) with a **Chakra UI** frontend.  
Built for managing products through a clean interface and RESTful API — all running with a single `npm run dev` command from the root.

---

## 🚀 Features

- 🔄 **CRUD operations** (create, read, update, delete) for products  
- ⚡ **Single command dev environment** — run frontend & backend together  
- 💅 **Modern UI** powered by Chakra UI  
- ☁️ **MongoDB Atlas** cloud database  
- 🧭 **Express API** with clean routes and controller structure  
- 🧱 **Reusable components** and responsive design  
- 🌐 Built with environment variables for secure configuration  

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React, Chakra UI, Axios, Vite  |
| **Backend** | Node.js, Express |
| **Database** | MongoDB Atlas |
| **Styling** | Chakra UI Components |
| **Version Control** | Git & GitHub |
| **Package Manager** | npm |

---
SHOWCASE  with light and dark mode

<img width="1241" height="528" alt="image" src="https://github.com/user-attachments/assets/4eb917c6-a096-4a0e-af78-aa57e47ba385" />
<img width="449" height="295" alt="image" src="https://github.com/user-attachments/assets/a5b3ab2d-e0e9-4615-a46c-a0e9134f1d46" />
<img width="1388" height="655" alt="image" src="https://github.com/user-attachments/assets/e658525f-cb15-4472-9ec3-bbb7bbadbc2c" />
<img width="1458" height="664" alt="image" src="https://github.com/user-attachments/assets/22dddcff-ab4c-489a-99b7-05570852bedb" />










## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Tezfai/Product-Manager.git
cd Product-Manager
2️⃣ Install dependencies
Run this once from the root folder:

bash
Copy code
npm install
3️⃣ Add environment variables
Create a .env file inside the root or backend folder:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
4️⃣ Run the app
You can start both servers at once:

bash
Copy code
npm run dev

Frontend → http://localhost:5173

Backend API → http://localhost:5000

🧠 API Overview

Method	Endpoint	Description

GET	/api/products	Get all products

GET	/api/products/:id	Get product by ID

POST	/api/products	Create a product

PUT	/api/products/:id	Update a product

DELETE	/api/products/:id	Delete a product

🧰 Scripts
Command	Description

npm install	Install dependencies (root, backend, frontend)

npm run dev	Start both frontend and backend (dev mode)

npm run build	Build frontend for production

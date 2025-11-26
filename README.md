<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>

<h1>MERN Stack Todo Application</h1>

<p>A simple <strong>CRUD</strong> (Create, Read, Update, Delete) Todo application built using the <strong>MERN stack</strong> — MongoDB, Express.js, React.js, and Node.js.<br>
This project serves as an academic exercise to practice the fundamentals of full-stack development with the MERN stack.</p>

<hr/>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#project-overview">Project Overview</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#tech-stack">Tech Stack</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#project-structure">Project Structure</a></li>
  <li><a href="#api-endpoints">API Endpoints</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ul>

<hr/>

<section id="project-overview">
  <h2>Project Overview</h2>
  <p>This project is a task manager application where users can:</p>
  <ul>
    <li>Add new tasks</li>
    <li>View all tasks</li>
    <li>Edit existing tasks</li>
    <li>Mark tasks as completed or not completed</li>
    <li>Delete tasks</li>
  </ul>
  <p>The backend is powered by <strong>Node.js</strong> and <strong>Express</strong> with a <strong>MongoDB</strong> database, while the frontend uses <strong>React</strong> with hooks and Axios for API communication.</p>
</section>

<section id="features">
  <h2>Features</h2>
  <ul>
    <li>Full CRUD operations on todo items</li>
    <li>Responsive and user-friendly UI</li>
    <li>Real-time updates on tasks</li>
    <li>Input validation on frontend and backend</li>
    <li>Error handling with status codes and messages</li>
  </ul>
</section>

<section id="tech-stack">
  <h2>Tech Stack</h2>
  <table>
    <thead>
      <tr>
        <th>Layer</th>
        <th>Technology</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Frontend</td><td>React.js, Axios</td></tr>
      <tr><td>Backend</td><td>Node.js, Express.js</td></tr>
      <tr><td>Database</td><td>MongoDB, Mongoose</td></tr>
      <tr><td>Environment</td><td>dotenv</td></tr>
    </tbody>
  </table>
</section>

<section id="installation">
  <h2>Installation</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js and npm installed</li>
    <li>MongoDB Atlas account or local MongoDB instance</li>
  </ul>

  <h3>Steps</h3>
  <ol>
    <li>Clone the repository
      <pre><code>git clone &lt;repository_url&gt;
cd mern-todo-app</code></pre>
    </li>
    <li>Backend setup
      <pre><code>cd backend
npm install</code></pre>
    </li>
    <li>Create <code>.env</code> file in the backend folder and add your MongoDB connection string:
      <pre><code>MONGO_URI=your_mongodb_connection_string_here
PORT=5000</code></pre>
    </li>
    <li>Start backend server
      <pre><code>npm run dev</code></pre>
    </li>
    <li>Frontend setup (in separate terminal)
      <pre><code>cd frontend
npm install
npm start</code></pre>
    </li>
  </ol>
</section>

<section id="usage">
  <h2>Usage</h2>
  <p>Open your browser and navigate to <code>http://localhost:3000</code></p>
  <p>Add, edit, toggle, or delete tasks as needed. Tasks are stored persistently in MongoDB.</p>
</section>

<section id="project-structure">
  <h2>Project Structure</h2>
  <pre><code>mern-todo-app/
│
├── backend/
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── models/
│   │   └── todo.model.js   # Mongoose model for todo
│   ├── routes/
│   │   └── todo.route.js   # Express routes for todos
│   ├── server.js           # Express server entry point
│   └── .env                # Environment variables (not committed)
│
└── frontend/
    ├── src/
    │   ├── App.jsx         # Main React component
    │   └── ...             # Other React components and assets
    ├── package.json
    └── ...
</code></pre>
</section>

<section id="api-endpoints">
  <h2>API Endpoints</h2>
  <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>GET</td><td>/api/todos</td><td>Get all todos</td></tr>
      <tr><td>POST</td><td>/api/todos</td><td>Create a new todo</td></tr>
      <tr><td>PATCH</td><td>/api/todos/:id</td><td>Update a todo (text/completed)</td></tr>
      <tr><td>DELETE</td><td>/api/todos/:id</td><td>Delete a todo</td></tr>
    </tbody>
  </table>
</section>

<section id="contributing">
  <h2>Contributing</h2>
  <p>This project is for academic purposes. Contributions are welcome but should align with the educational goals.</p>
</section>

<section id="license">
  <h2>License</h2>
  <p>This project is open-source and available under the MIT License.</p>
</section>

</body>
</html>

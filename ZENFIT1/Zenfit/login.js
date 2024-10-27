document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }
  
      const data = await response.json();
      localStorage.setItem("token", data.token); // Save token for later use
      localStorage.setItem("userId", data.userId); // Save user ID to fetch profile on dashboard
  
      // Redirect to the dashboard page
      window.location.href = "dashboard.html";
    } catch (error) {
      console.error(error.message);
      alert("Login failed. Please try again.");
    }
  });
  




  const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'yourUsername',
    password: '',
    database: 'yourDatabase'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

app.post('/api/users/register', (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    let sql = 'INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)';
    let values = [firstname, lastname, email, password];

    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.send('User registered');
    });
});

app.post('/api/users/login', (req, res) => {
    const { email, password } = req.body;
    let sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    let values = [email, password];

    db.query(sql, values, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({
                token: 'yourToken',
                userId: results[0].id
            });
        } else {
            res.status(401).send('Login failed. Please check your credentials.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

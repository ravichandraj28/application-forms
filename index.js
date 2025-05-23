const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/insurance-form', (req, res) => {
  res.sendFile(path.join(__dirname, '1_insurance_form.html'));
});

app.get('/product-form', (req, res) => {
  res.sendFile(path.join(__dirname, '2_product_form.html'));
});

app.get('/declaration1', (req, res) => {
  res.sendFile(path.join(__dirname, '3_Declaration.html'));
});

app.get('/medical-question', (req, res) => {
  res.sendFile(path.join(__dirname, '4_Medical Question.html'));
});

app.get('/declaration2', (req, res) => {
  res.sendFile(path.join(__dirname, '5_Declaration.html'));
});

app.get('/declaration3', (req, res) => {
  res.sendFile(path.join(__dirname, '6_Declaration.html'));
});

app.post('/submit', (req, res) => {
  console.log('Form Submitted:', req.body);
  res.send('Thank you! Your form has been submitted.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

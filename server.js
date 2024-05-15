const express = require('express');
const Student = require('./student');
const app = express();
const crypto = require('crypto')

// parse body
app.use(express.json());

// IN MEMORY DB
const students = [];
// END OF IN MEMORY DB

app.post('/students', (req, res) => {
    const student = new Student(
        crypto.randomUUID(),
        req.body.name,
        req.body.email,
    );
    students.push(student);
    res.json(student);
})

app.patch('/students/:id', (req, res) => {
    const student = students.find(student => student.id === req.params.id);
    if (!student) {
        res.status(404).json({error: 'Student not found'});
    } else {

        student.email = req.body.email || student.email;
        student.name = req.body.name || student.name;

        res.json(student);
    }
})

app.delete('/students/:id', (req, res) => {
    const student = students.find(student => student.id === req.params.id);
    if (!student) {
        res.status(404).json({error: 'Student not found'});
    } else {
        students.splice(students.indexOf(student), 1);
        res.json(student);
    }
});

app.get('/students', (req, res) => {
    res.json(students);
})

app.listen(3000, () => {
    console.log('server started');
});

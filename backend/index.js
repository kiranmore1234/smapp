const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/studentDB')
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    form : String,
    gender : String,
    email : String,
    password : String,
    option : String
})

const Student = mongoose.model('Student', studentSchema);

app.post('/students', async (req, res)=>{
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/students', async (req,res)=>{
    try{
        const students = await Student.find();
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/students/:id', async (req, res)=>{
    try{
        const student = await Student.findById(req.params.id)
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message : "Error fetching student data", error});
    }
});

app.put('/update/student/:id', async (req,res)=>{
    try{
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json (updatedStudent);
    } catch (error) {
        res.status(500).json({ message : "Error updating student", error});
    }
});

app.delete('/delete/student/:id', async (req,res)=>{
    try{
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Student deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: "Error deleteing student", error})
    }
});

app.listen(8000, () =>{
    console.log(`Server is running on post 8000`)
});
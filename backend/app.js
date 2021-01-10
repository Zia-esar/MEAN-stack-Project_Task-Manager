const express = require('express');
const cors = require('cors');

const mongoose = require('./database/mongoose');
const Task = require('./database/models/task');
const List = require('./database/models/list');

const app = express();
app.use(express.json());
app.use(cors());

/* CORS ==> Cross Origin Request Security 
    localhost:3000  ==> backend api
    localhost:4200  ==> frondend api
*/

app.get('/lists', (req, res) => {
    List.find({})
        .then(lists => res.send(lists))
        .catch(error => console.log(error))
})

app.post('/lists', (req, res)=> {
    new List({ 'title' : req.body.title}).save()
        .then((list)=> res.send(list))
        .catch(error => console.log(error))
})

app.get('/lists/:listID', (req, res)=> {
    List.find({ _id: req.params.listID})
        .then(item => res.send(item))
        .catch(err => console.log(err))
})

app.patch('/lists/:listID', (req, res)=> {
    List.findOneAndUpdate({ _id: req.params.listID}, {$set: req.body })
        .then(item => res.send(item))
        .catch(err => console.log(err))
})

app.delete('/lists/:listID', (req, res)=> {
    List.findByIdAndDelete(req.params.listID)
        .then(item => res.send(item))
        .catch(err => console.log(err))
})

app.listen(3000, () => console.log('Server is running on port 3000...'))
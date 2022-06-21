const express = require("express")
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config()

let db,
    correct,
    dbName = 'QOTD',
    dbConnectionStr = process.env.DB_String
    

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
    .then(client =>{
        console.log(`Connected to ${dbName} Database `)
        db = client.db(dbName)
    })


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (req, res)=>{
    db.collection('PathA-QOTD').find().toArray()
    .then(data=> {

        let num = Math.floor(Math.random() * data.length)
        currentQuestion = data[num]
        question = currentQuestion["question"]
        correct = currentQuestion["correct"]

        function shuffle(array){
            for(let i = array.length-1; i > 0; i--){
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        const answers = [{answer : currentQuestion["answer"], isCorrect: true},
                        {answer: currentQuestion["wrong1"], isCorrect: false},
                        {answer: currentQuestion["wrong2"], isCorrect: false},
                        {answer: currentQuestion["wrong3"], isCorrect: false}]

        shuffle(answers)
        
        res.render('index.ejs', {question, answers, correct})
    })
})
app.get('/', (req,res) =>{
    res.send(JSON(correct))
})

module.exports.getCorrect = function(){
    return correct
}

app.get('/css/style.css', (req, res) =>{
    res.sendFile(__dirname + '/css/style.css')
})
app.get('/js/main.js', (req,res) =>{
    res.sendFile(__dirname + '/js/main.js')
})

app.listen(process.env.PORT || PORT , ()=> {console.log(`Listening on port:${PORT}`)})
const express = require("express")
const cors = require('cors');
const server = express()
const router = express.Router()
const fs = require('fs');

server.use(express.json());
server.use(cors());

const readFile = () => {
  const content = fs.readFileSync('./data/items.json', 'utf-8')
  return JSON.parse(content)
}

const writeFile = (content) => {
  const updateFile = JSON.stringify(content)
  fs.writeFileSync('./data/items.json', updateFile, 'utf-8')
}

router.get('/', (req, res) => {
  const content = readFile()
  res.send(content)
})

router.get('/getCards', (req, res) => {
  const content = readFile()

  res.send(content)
})

router.get('/getHistory/:id', (req, res) => {
  const content = readFile()
  const { id } = req.params;
  const getSelected = content.find((item) => item.id === id)
  const atualizations = getSelected.historyAtualization;
  res.send(atualizations)
})

router.post('/register', (req, res) => {
  const { title, body, dateAtualization, dateCreation, historyAtualization, edited } = req.body
  const currentContent = readFile()
  const id = Math.random().toString(32).substr(2, 9)
  currentContent.push({ id, title, body, dateAtualization, dateCreation, historyAtualization, edited })
  writeFile(currentContent)
  res.send({ id, title, body, dateAtualization, dateCreation, historyAtualization, edited })
})

router.put('/edit/:id', (req, res) => {
  const currentContent = readFile()
  const { id } = req.params;

  const { title, body, dateAtualization, dateCreation, edited } = req.body;

  const getPrevious = currentContent.find((item) => item.id === id)

  const previous = {
    edited: getPrevious.edited,
    id: getPrevious.id,
    title: getPrevious.title,
    body: getPrevious.body,
    dateCreation: getPrevious.dateCreation,
    dateAtualization: dateAtualization,
  }

  currentContent.forEach(item => {
    if (item.id === id) {
      item.edited === edited;
      item.title = title;
      item.body = body;
      item.dateAtualization = dateAtualization;
      item.dateCreation = dateCreation;
      item.historyAtualization.push(previous)
    }
  });

  const history = getPrevious.historyAtualization;

  history.map((item, index) => item.id = index)
  writeFile(currentContent)
  res.send(currentContent)
})

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  const currentContent = readFile()
  const newDb = currentContent.filter((item) => item.id !== id)
  writeFile(newDb)
  res.send(currentContent)
})

router.delete('/deleteAll', (req, res) => {
  const currentContent = readFile()
  const newDb = [];
  writeFile(newDb)
  res.send(newDb)
})

server.use(router)

server.listen(5000, () => {
  console.log('Rodando servidor')
})

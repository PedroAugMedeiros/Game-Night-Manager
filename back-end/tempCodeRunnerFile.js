const content = fs.readFileSync('./data/items.json', 'utf-8')
console.log(JSON.parse(content))
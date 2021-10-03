const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

const poems = [
    {
      poet: 'Edgar Allan Poe',
      poem: 'To --',
      theme: 'Years of love have been forgotten, in the hatred of a minute.'
    },
    {
      poet: 'Lang Leav',
      poem: 'No Other',
      theme: 'It is a love that will die with me.'
    },
    {
      poet: 'John Keats',
      poem: 'To Autumn',
      theme: 'Season of mists and mellow fruitfulness'
    }
]


app.listen(PORT, () => console.log(`Poems API`))

app.get('/poems', (req, res) => {
    res.status(200).send(poems)
})
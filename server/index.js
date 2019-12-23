/* eslint-disable no-console */
const express = require('express')
const app = express()
const port = process.env.PORT;
const CORS = require('cors');
const path = require('path');

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});
console.log(process.env)

app.use(CORS());
app.use(express.json())
app.use('/', express.static(path.join(__dirname, '../dist')))
app.use('/bundle', express.static(path.join(__dirname, '../dist/bundle.js')))

app.post('/api/movies', async (req, res) => {
    try {
        var movie = req.body;
        console.log(movie);
        var query = `insert into Movies (id, title, overview, vote_average, release_date) values (${movie[0]},'${movie[1]}','${movie[2]}',${movie[3]},'${movie[4]}');`
        var client = await pool.connect();
        var result = await pool.query(query);
        console.log('result:', result)
        var results = { 'results': (result) };
        res.send(results);
    } catch (err) {
        console.log("err:", err);
        res.send("Error " + err);
    }
})

// app.get('/api/movies', (req, res) => {
//     Movie.findAll()
//         .then((results) => {
//             res.send(results);
//         })
//         .catch(err => {
//             console.log(err);
//             res.sendStatus(400)
//         });
// })

app.get('/api/movies', async (req, res) => {
    try {
        var client = await pool.connect()
        var result = await client.query('SELECT * FROM Movies');
        var results = { 'results': (result) ? result.rows : null };
        res.send(results);
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})

// app.delete('/api/movies', (req, res) => {
//     Movie.destroy({ where: { id: req.body.id } })
//         .then((result) => {
//             res.sendStatus(200);
//         })
//         .catch((err) => {
//             res.sendStatus(500)
//         })
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

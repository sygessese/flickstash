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
        var query = `insert into Movies (id, title, overview, vote_average, release_date, watched) values (${movie.id},'${movie.title}','${movie.overview}',${movie.vote_average},'${movie.release_date}', 'false');`
        console.log(query);

        var client = await pool.connect();
        var result = await client.query(query);
        console.log('result:', result)
        var results = { 'results': (result) };
        res.send(results);
    } catch (err) {
        console.log("err:", err);
        res.send("Error " + err);
    }
})

app.put('/api/movies', async (req, res) => {
    try {
        var client = await pool.connect()
        var query = `update Movies set watched = '${req.body.bool}' where id = ${req.body.id}`
        var result = await client.query(query);
        var results = { 'results': (result) ? result.rows : null };
        res.send(results);
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})

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

app.delete('/api/movies', async (req, res) => {
    try {
        var client = await pool.connect()
        var id = req.body.id;
        var result = await client.query(`delete from Movies where id = ${id}`);
        var results = { 'results': (result) ? result.rows : null };
        res.send(results);
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

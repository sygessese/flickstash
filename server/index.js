const express = require('express')
const app = express()
const port = 3000
const Sequelize = require('sequelize')
const CORS = require('cors');

const sequelize = new Sequelize('movies', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
  });
  
var Movie = sequelize.define('movie', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
        },
    title: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false  
});

const movieList = {
    "page": 1,
    "total_results": 6449,
    "total_pages": 323,
    "results": [
        {
            "popularity": 17.311,
            "vote_count": 2121,
            "video": false,
            "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
            "id": 19404,
            "adult": false,
            "backdrop_path": "/yFryZAcSO1XEwENkYUquQ6EBGsD.jpg",
            "original_language": "hi",
            "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "title": "Dilwale Dulhania Le Jayenge",
            "vote_average": 8.9,
            "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
            "release_date": "1995-10-20"
        },
        {
            "popularity": 47.547,
            "vote_count": 13931,
            "video": false,
            "poster_path": "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
            "id": 278,
            "adult": false,
            "backdrop_path": "/j9XKiZrVeViAixVRzCta7h1VU9W.jpg",
            "original_language": "en",
            "original_title": "The Shawshank Redemption",
            "genre_ids": [
                80,
                18
            ],
            "title": "The Shawshank Redemption",
            "vote_average": 8.7,
            "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            "release_date": "1994-09-23"
        },
        {
            "popularity": 32.377,
            "vote_count": 10642,
            "video": false,
            "poster_path": "/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
            "id": 238,
            "adult": false,
            "backdrop_path": "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
            "original_language": "en",
            "original_title": "The Godfather",
            "genre_ids": [
                80,
                18
            ],
            "title": "The Godfather",
            "vote_average": 8.6,
            "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            "release_date": "1972-03-15"
        },
        {
            "popularity": 33.484,
            "vote_count": 8553,
            "video": false,
            "poster_path": "/yPisjyLweCl1tbgwgtzBCNCBle.jpg",
            "id": 424,
            "adult": false,
            "backdrop_path": "/cTNYRUTXkBgPH3wP3kmPUB5U6dA.jpg",
            "original_language": "en",
            "original_title": "Schindler's List",
            "genre_ids": [
                18,
                36,
                10752
            ],
            "title": "Schindler's List",
            "vote_average": 8.6,
            "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
            "release_date": "1993-12-15"
        },
        {
            "popularity": 23.855,
            "vote_count": 4539,
            "video": false,
            "poster_path": "/xq1Ugd62d23K2knRUx6xxuALTZB.jpg",
            "id": 372058,
            "adult": false,
            "backdrop_path": "/7OMAfDJikBxItZBIug0NJig5DHD.jpg",
            "original_language": "ja",
            "original_title": "君の名は。",
            "genre_ids": [
                16,
                18,
                10749
            ],
            "title": "Your Name.",
            "vote_average": 8.5,
            "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
            "release_date": "2017-04-07"
        },
        {
            "popularity": 38.359,
            "vote_count": 747,
            "video": false,
            "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
            "id": 496243,
            "adult": false,
            "backdrop_path": "/ny5aCtglk2kceGAuAdiyqbhBBAf.jpg",
            "original_language": "ko",
            "original_title": "기생충",
            "genre_ids": [
                35,
                18,
                53
            ],
            "title": "Parasite",
            "vote_average": 8.5,
            "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
            "release_date": "2019-10-11"
        },
        {
            "popularity": 34.387,
            "vote_count": 6266,
            "video": false,
            "poster_path": "/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
            "id": 240,
            "adult": false,
            "backdrop_path": "/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg",
            "original_language": "en",
            "original_title": "The Godfather: Part II",
            "genre_ids": [
                80,
                18
            ],
            "title": "The Godfather: Part II",
            "vote_average": 8.5,
            "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            "release_date": "1974-12-20"
        },
        {
            "popularity": 29.791,
            "vote_count": 7894,
            "video": false,
            "poster_path": "/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
            "id": 129,
            "adult": false,
            "backdrop_path": "/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg",
            "original_language": "ja",
            "original_title": "千と千尋の神隠し",
            "genre_ids": [
                16,
                14,
                10751
            ],
            "title": "Spirited Away",
            "vote_average": 8.5,
            "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
            "release_date": "2002-09-20"
        },
        {
            "popularity": 23.446,
            "vote_count": 8843,
            "video": false,
            "poster_path": "/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg",
            "id": 497,
            "adult": false,
            "backdrop_path": "/Rlt20sEbOQKPVjia7lUilFm49W.jpg",
            "original_language": "en",
            "original_title": "The Green Mile",
            "genre_ids": [
                80,
                18,
                14
            ],
            "title": "The Green Mile",
            "vote_average": 8.5,
            "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
            "release_date": "1999-12-10"
        },
        {
            "popularity": 20.931,
            "vote_count": 7663,
            "video": false,
            "poster_path": "/f7DImXDebOs148U4uPjI61iDvaK.jpg",
            "id": 637,
            "adult": false,
            "backdrop_path": "/bORe0eI72D874TMawOOFvqWS6Xe.jpg",
            "original_language": "it",
            "original_title": "La vita è bella",
            "genre_ids": [
                35,
                18
            ],
            "title": "Life Is Beautiful",
            "vote_average": 8.5,
            "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
            "release_date": "1998-10-22"
        },
        {
            "popularity": 41.647,
            "vote_count": 16244,
            "video": false,
            "poster_path": "/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
            "id": 680,
            "adult": false,
            "backdrop_path": "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
            "original_language": "en",
            "original_title": "Pulp Fiction",
            "genre_ids": [
                80,
                53
            ],
            "title": "Pulp Fiction",
            "vote_average": 8.5,
            "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
            "release_date": "1994-10-14"
        },
        {
            "popularity": 47.016,
            "vote_count": 5247,
            "video": false,
            "poster_path": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
            "id": 324857,
            "adult": false,
            "backdrop_path": "/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg",
            "original_language": "en",
            "original_title": "Spider-Man: Into the Spider-Verse",
            "genre_ids": [
                28,
                12,
                16,
                35,
                878
            ],
            "title": "Spider-Man: Into the Spider-Verse",
            "vote_average": 8.4,
            "overview": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
            "release_date": "2018-12-14"
        },
        {
            "popularity": 31.765,
            "vote_count": 15774,
            "video": false,
            "poster_path": "/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
            "id": 13,
            "adult": false,
            "backdrop_path": "/wMgbnUVS9wbRGAdki8fqxKU1O0N.jpg",
            "original_language": "en",
            "original_title": "Forrest Gump",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "title": "Forrest Gump",
            "vote_average": 8.4,
            "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
            "release_date": "1994-07-06"
        },
        {
            "popularity": 49.955,
            "vote_count": 19795,
            "video": false,
            "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            "id": 155,
            "adult": false,
            "backdrop_path": "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
            "original_language": "en",
            "original_title": "The Dark Knight",
            "genre_ids": [
                28,
                80,
                18,
                53
            ],
            "title": "The Dark Knight",
            "vote_average": 8.4,
            "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
            "release_date": "2008-07-18"
        },
        {
            "popularity": 40.081,
            "vote_count": 13863,
            "video": false,
            "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
            "id": 122,
            "adult": false,
            "backdrop_path": "/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg",
            "original_language": "en",
            "original_title": "The Lord of the Rings: The Return of the King",
            "genre_ids": [
                28,
                12,
                14
            ],
            "title": "The Lord of the Rings: The Return of the King",
            "vote_average": 8.4,
            "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
            "release_date": "2003-12-17"
        },
        {
            "popularity": 40.458,
            "vote_count": 17151,
            "video": false,
            "poster_path": "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
            "id": 550,
            "adult": false,
            "backdrop_path": "/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg",
            "original_language": "en",
            "original_title": "Fight Club",
            "genre_ids": [
                18
            ],
            "title": "Fight Club",
            "vote_average": 8.4,
            "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
            "release_date": "1999-10-15"
        },
        {
            "popularity": 24.593,
            "vote_count": 5332,
            "video": false,
            "poster_path": "/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg",
            "id": 539,
            "adult": false,
            "backdrop_path": "/3md49VBCeqY6MSNyAVY6d5eC6bA.jpg",
            "original_language": "en",
            "original_title": "Psycho",
            "genre_ids": [
                18,
                27,
                53
            ],
            "title": "Psycho",
            "vote_average": 8.4,
            "overview": "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
            "release_date": "1960-09-08"
        },
        {
            "popularity": 19.795,
            "vote_count": 2406,
            "video": false,
            "poster_path": "/x733R4ISI0RbKeHhVkXdTMFmTFr.jpg",
            "id": 311,
            "adult": false,
            "backdrop_path": "/vnT6HzjLSDrAweHn9xWykb8Ii6T.jpg",
            "original_language": "en",
            "original_title": "Once Upon a Time in America",
            "genre_ids": [
                80,
                18
            ],
            "title": "Once Upon a Time in America",
            "vote_average": 8.4,
            "overview": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
            "release_date": "1984-06-01"
        },
        {
            "popularity": 31.584,
            "id": 769,
            "video": false,
            "vote_count": 6011,
            "vote_average": 8.4,
            "title": "GoodFellas",
            "release_date": "1990-09-19",
            "original_language": "en",
            "original_title": "GoodFellas",
            "genre_ids": [
                18,
                80
            ],
            "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
            "adult": false,
            "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
            "poster_path": "/pwpGfTImTGifEGgLb3s6LRPd4I6.jpg"
        },
        {
            "popularity": 14.28,
            "vote_count": 1880,
            "video": false,
            "poster_path": "/hYzCLju3W74nLhhRXfPkwDi1Tun.jpg",
            "id": 11216,
            "adult": false,
            "backdrop_path": "/tVi83ttAeyMJinYpy6xfgJSpzvP.jpg",
            "original_language": "it",
            "original_title": "Nuovo Cinema Paradiso",
            "genre_ids": [
                18,
                10749
            ],
            "title": "Cinema Paradiso",
            "vote_average": 8.4,
            "overview": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
            "release_date": "2002-06-14"
        }
    ]
}

app.use(CORS());
//app.use turn them into json things

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json())
app.post('/api/movies', (req, res) => {
    var movie = req.body;
    console.log(movie);
    Movie.create(movie)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        });
})

app.get('/api/movies', (req, res) => {
    Movie.findAll()
        .then((results)=>{
            res.send(results);  
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400)
        });
})  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

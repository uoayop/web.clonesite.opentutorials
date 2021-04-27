var express = require('express');
var router = express.Router();

const connection = require('../config/database');

// DB 모든 음악 반환
router.get('/', function (req, res, next) {
    connection.query('use ME');
    connection.query('SELECT * from MUSICS', (error, rows, fields) => {
        if (error){
            console.error(error);
            res.status(500).send('Internal Server Error');
        }

        console.log(': ',rows);
        res.send(rows);
    })
});

// 국내 장르 별 페이지를 위한 코드
router.get('/Korea/:genre', function (req, res, next) {
    console.log("/Korea/:genre 호출");
    connection.query('use ME');
    connection.query('SELECT * from MUSICS', (error, rows, fields) => {
        if (error){
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
        var genre = parseInt(req.params.genre, 10)
        var music = rows.filter(function (music) {
            return (music.GENRE === genre && music.Korea === 0)
        });
        res.send(music);
    })
});


// 국내 음악 반환하는 코드
router.get('/Korea', function(req, res, next){
    console.log("/Korea 호출");
    connection.query('use ME');
    connection.query('SELECT * from MUSICS', (error, rows, fields) => {
        if (error){
            console.error(error);
            res.status(500).send('Internal Server Error');
        }

        console.log(': ',rows);
        var music = rows.filter(function (music) {
            return music.Korea === 0
        });
        res.send(music);
    })
})


// 음악 추가하는 코드
router.post('/AddMusic', function(req, res, next) {
    const params = req.body;
    connection.query('use ME');
    const query = `INSERT INTO MUSICS (TITLE, URL, GENRE, SINGER, Korea) VALUES
    ("${params.title}", "${params.url}", ${params.genre}, "${params.singer}", 0);`;
  
    console.log('[POST] addMusics query: ', query);
  
    connection.query(query, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
  
      console.log('[POST] addMusics result: ', result);
  
      if (Number.isNaN(result.insertId) || result.insertId < 0) {
        res.status(500).send('Item create failed.');
      }
  
      res.send({
        id: result.insertId,
      });
    });
  });

module.exports = router;
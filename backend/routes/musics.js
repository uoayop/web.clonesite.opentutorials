var express = require('express');
var router = express.Router();

const connection = require('../config/database');

// 모든 음악 반환
router.get('/', function (req, res, next) {
    connection.query('use ME');
    connection.query('SELECT * from MUSICS', (error, rows, fields) => {
        if (error){
            res.status(500).send('Internal Server Error');
            throw error;
        }

        console.log(': ',rows);
        res.send(rows);
    })
});

// 국내 음악 장르 별로 반환
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


// 국내 음악 반환
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

// 해외 음악 장르 별로 반환
router.get('/Global/:genre', function (req, res, next) {
  console.log("/Global/:genre 호출");
  connection.query('use ME');
  connection.query('SELECT * from MUSICS', (error, rows, fields) => {
      if (error){
          console.error(error);
          res.status(500).send('Internal Server Error');
      }
      var genre = parseInt(req.params.genre, 10)
      var music = rows.filter(function (music) {
          return (music.GENRE === genre && music.Korea === 1)
      });
      res.send(music);
  })
});


// 해외 음악 반환
router.get('/Global', function(req, res, next){
  console.log("/Global 호출");
  connection.query('use ME');
  connection.query('SELECT * from MUSICS', (error, rows, fields) => {
      if (error){
          console.error(error);
          res.status(500).send('Internal Server Error');
      }

      console.log(': ',rows);
      var music = rows.filter(function (music) {
          return music.Korea === 1
      });
      res.send(music);
  })
})

// 음악 추가
router.post('/AddMusic', function(req, res, next) {
    const params = req.body;
    console.log("Post params:",params);
    connection.query('use ME');
    const query = `INSERT INTO MUSICS (TITLE, URL, GENRE, SINGER, Korea) VALUES
    ("${params.TITLE}", "${params.URL}", ${params.GENRE}, "${params.SINGER}", ${params.Korea});`;
  
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

  // 음악 수정하기
  router.put('/EditMusic/:id', function(req, res, next){
    if (!req.params.id){
        res.status(500).send('ID is not exist.');
        return;
    }

    const params = req.body;
    console.log("put params:",params);

    connection.query('use ME');
    const query = `UPDATE MUSICS SET TITLE="${params.TITLE}", GENRE=${params.GENRE}, SINGER="${params.SINGER}" WHERE ID=${req.params.id};`;
  
    console.log('[PUT] editMusics query: ', query);
  
    connection.query(query, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
  
      console.log('[PUT] editMusics result: ', result);

      res.send({ });
    });
  })

  router.delete('/DeleteMusic/:id', function(req, res, next){
    if (!req.params.id){
        res.status(500).send('ID is not exist.');
        return;
    }

    connection.query('use ME');
    const query = `DELETE FROM MUSICS WHERE id = ${req.params.id};;`;
  
    console.log('[delete] deleteMusic query: ', query);
  
    connection.query(query, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
  
      console.log('[DELETE] deleteMusic result: ', result);

      res.send({ });
    });
  })

module.exports = router;
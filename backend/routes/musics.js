var express = require('express');
var router = express.Router();
var musics = require('../musics.json');

// 모든 음악 반환
router.get('/', function (req, res, next) {
 res.send(musics)
});

// 음악 장르 페이지를 위한 코드
router.get('/Korea/:genre', function (req, res, next) {
    console.log("/Korea/:genre 호출");
    console.log("req",req);
    var genre = parseInt(req.params.genre, 10)
    var music = musics.filter(function (music) {
        return (music.genre === genre && music.korea === true)
    });
    res.send(music)
});

router.get('/Korea', function(req, res, next){
    console.log("/Korea 호출");
    var music = musics.filter(function (music) {
        return music.korea === true
    });
    res.send(music)
})

module.exports = router;
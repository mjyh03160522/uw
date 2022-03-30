/*
  *
  *******  part1.환경설정 *******
  *
*/
var express = require('express');
var port = process.env.PORT || 3000;
var ejs = require('ejs');
var request = require('request');//request
var app = express();

app.use(express.static(__dirname + '/public'));//express
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('views', __dirname + '/views');//ejs
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


/*
  *
  *******  part2.프론트-화면 렌더링 *******
  *
*/
//2-1. 메인
app.get('/', function (req, res) {
    res.render('index')
})
// app.get('/main', function (req, res) {
//     res.render('main')
// })
app.get('/description', function (req, res) {
    res.render('description')
})
app.get('/setting', function (req, res) {
    res.render('setting')
})
app.get('/record', function (req, res) {
    res.render('record')
})
app.get('/contact', function (req, res) {
    res.render('contact')
})
app.get('/play_auto', function (req, res) {
    res.render('play_auto')
})
app.get('/play_semi-auto_1', function (req, res) {
    res.render('play_semi-auto_1')
})
app.get('/play_semi-auto_2', function (req, res) {
    res.render('play_semi-auto_2')
})
app.get('/play_manual', function (req, res) {
    res.render('play_manual')
})
app.get('/play_intro', function (req, res) {
    res.render('play_intro')
})
app.get('/play_day', function (req, res) {
    res.render('play_day')
})
app.get('/play_night', function (req, res) {
    res.render('play_night')
})
app.get('/play_winner', function (req, res) {
    res.render('play_winner')
})
;

// app.post('/classifyVideo', function(req, res) {
//     var groupInfo = req.body.groupInfo;
//     var videoKP = req.body.videoKP;
//     /*
//       * 재생목록 관련 structure
//         videoItem = {"videoId":, title":, "img":, "comment_count":, "korPercent":, "state:"}
//         playListOne = {"groupId": , "item" : [ videoItem ] }
//         playListAll = {"channelId": , "playList" : [ playListOne ]}
//         playListItem = {"groupId :", "videoId:"}
//         playListItemArr = [ playListItem ]
//     */
//     console.log(groupInfo);
//     console.log(videoKP);
//     res.json("OK");
// })
/*
  *
  *******  part3.프론트-화면 렌더링 *******
  *
*/
// app.post('/getComment', function(req, res) {
//     var linkURLs = new Array();
//     linkURLs = req.body.cmtArr;
//     console.log(linkURLs);
//
//     res.json("success")
// })
//3.$. 서버처리-대기
app.listen(3000);
console.log("Listening on port", port);

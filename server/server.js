const http = require('http'); // 서버를 만드는 모듈 불러옴
const route = require('./route/route.js');
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const app = express();
const db=require('./db.js')
const bodyParser=require('body-parser');
db();
app.use(bodyParser.json());
app.use('/', route);
app.use((req, res, next) => { // 404 처리 부분
  res.status(404).send('일치하는 주소가 없습니다!');
});
app.use((err, req, res, next) => { // 에러 처리 부분
  console.error(err.stack); // 에러 메시지 표시
  res.status(500).send('서버 에러!'); // 500 상태 표시 후 에러 메시지 전송
});
app.listen(8080);

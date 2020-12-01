const express = require('express');
const path = require('path');
const financial = require('../model/Financial');
const company = require('../model/Company');
const { listIndexes } = require('../model/Financial');
const { json } = require('body-parser');
const protection = { _id: 0, __v: 0 };
const router = express.Router(); // 라우터 분리

router.get('/', (req, res) => {
  // app 대신 router에 연결
  res.sendFile(path.join(__dirname + '/html/main.html'));
});
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/about.html'));
});

router.get('/find', (req, res) => {
  company.find({}, protection, function (err, companies) {
    var List = '종목코드&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이름';
    for (i = 0; i < companies.length; i++) {
      List =
        List +
        '<br/>' +
        companies[i].code +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
        companies[i].name;
    }
    res.send(List);
  });
});

router.get('/find/:code', (req, res) => {
  financial.find(
    { code: req.params.code },
    protection,
    function (err, financials) {
      res.json(financials);
    }
  );
});

router.post('/find/filtering', (req, res) => {
  var updownFilter = new Array();
  console.log(req.body);
  for (var i = 0; i < req.body.length; i++) {
    if (req.body[i].check == 'UP')
      updownFilter[i] = { $gte: req.body[i].value };
    else if (req.body[i].check == 'DOWN')
      updownFilter[i] = { $lte: req.body[i].value };
  }

  financial.find(
    {
      total: updownFilter[0],
      sell: updownFilter[1],
    },
    { code: 1, total: 1, sell: 1 },
    function (err, financials) {
      res.json(financials);
    }
  );
});

module.exports = router;

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
    res.json(companies);
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
  var { filters } = req.body;
  console.log(filters);
  for (var i = 0; i < filters.length; i++) {
    if (filters[i].checkedState === 'up')
      updownFilter[i] = { $gte: filters[i].value };
    else if (filters[i].checkedState === 'down')
      updownFilter[i] = { $lte: filters[i].value };
  }
  console.log(updownFilter);
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

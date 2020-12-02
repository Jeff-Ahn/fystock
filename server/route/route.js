const express = require('express');
const path = require('path');
const financial = require('../model/Financial');
const company = require('../model/Company');
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
  var getfilters = req.body.filters;
  var makefilters;
  console.log(getfilters);
  for (var i = 0; i < getfilters.length; i++) {
    if (getfilters[i].checkedState === 'up')
      updownFilter[i] = { $gte: getfilters[i].value };
    else if (getfilters[i].checkedState === 'down')
      updownFilter[i] = { $lte: getfilters[i].value };
    switch (getfilters[i].id) {
      case 1: //매출액
        makefilters = Object.assign({ total: updownFilter[i] }, makefilters);
        break;
      case 2: //영억이익
        makefilters = Object.assign({ sell: updownFilter[i] }, makefilters);
        break;
      case 3: //당기순이익
        makefilters = Object.assign({ pure: updownFilter[i] }, makefilters);
        break;
      case 4: //영억입익률
        makefilters = Object.assign({ sell_per: updownFilter[i] }, makefilters);
        break;
      case 5: //순이익률
        makefilters = Object.assign({ pure_per: updownFilter[i] }, makefilters);
        break;
      case 6: //ROE
        makefilters = Object.assign({ roe: updownFilter[i] }, makefilters);
        break;
      case 7: //부채비율
        makefilters = Object.assign(
          { debut_per: updownFilter[i] },
          makefilters
        );
        break;
      case 8: //당좌비율
        makefilters = Object.assign(
          { quick_ratio: updownFilter[i] },
          makefilters
        );
        break;
      case 9: //유보율
        makefilters = Object.assign(
          { reserv_ratio: updownFilter[i] },
          makefilters
        );
        break;
      case 10: //EPS
        makefilters = Object.assign({ eps: updownFilter[i] }, makefilters);
        break;
      case 11: //EPS PER
        makefilters = Object.assign({ eps_per: updownFilter[i] }, makefilters);
        break;
      case 12: //BPS
        makefilters = Object.assign({ bps: updownFilter[i] }, makefilters);
        break;
      case 13: //BPS PER
        makefilters = Object.assign({ bps_per: updownFilter[i] }, makefilters);
        break;
      case 14: //주당배당금
        makefilters = Object.assign({ weekly: updownFilter[i] }, makefilters);
        break;
      case 15: //시가배당률
        makefilters = Object.assign({ timely: updownFilter[i] }, makefilters);
        break;
      case 16: //배당성향
        makefilters = Object.assign({ trend: updownFilter[i] }, makefilters);
        break;
      default:
        break;
    }
  }
  console.log(makefilters);
  financial.find(
    makefilters,
    { code: 1, total: 1, sell: 1 },
    function (err, financials) {
      console.log(financials);
      res.json(financials);
    }
  );
});

module.exports = router;

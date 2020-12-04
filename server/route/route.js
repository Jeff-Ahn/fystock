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
  var makefilters = new Array();
  var resultList = new Array();
  var companyList = new Array();
  var filter;
  wait = 0;
  for (var i = 0; i < getfilters.length; i++) {
    if (getfilters[i].checkedState === 'up')
      updownFilter[i] = { $gte: getfilters[i].value };
    else if (getfilters[i].checkedState === 'down')
      updownFilter[i] = { $lte: getfilters[i].value };
    makefilters.push(selectOne(getfilters[i].id, updownFilter[i]));
  }
  filter = { $and: makefilters };
  console.log(filter);
  company.find({}, { _id: 0 }, function (err, companies) {
    for (var i = 0; i < companies.length; i++) {
      companyList.push(companies[i]);
    }
  });
  financial.find(filter, function (err, financials) {
    if (err) console.error(err);
    else {
      for (var i = 0; i < companyList.length; i++) {
        var count = 0;
        for (var j = 0; j < financials.length; j++) {
          if (companyList[i].code === financials[j].code) count++;
        }
        if (count === 4) resultList.push(companyList[i]);
        count = 0;
      }
    }
    res.json(resultList);
  });
});

function selectOne(id, updown) {
  var filters;
  switch (id) {
    case 1: //매출액
      filters = { $or: [{ total: updown }, { total: '*' }] };
      break;
    case 2: //영억이익
      filters = { $or: [{ sell: updown }, { sell: '*' }] };
      break;
    case 3: //당기순이익
      filters = { $or: [{ pure: updown }, { pure: '*' }] };
      break;
    case 4: //영억입익률
      filters = { $or: [{ sell_per: updown }, { sell_per: '*' }] };
      break;
    case 5: //순이익률
      filters = { $or: [{ pure_per: updown }, { pure_per: '*' }] };
      break;
    case 6: //ROE
      filters = { $or: [{ roe: updown }, { roe: '*' }] };
      break;
    case 7: //부채비율
      filters = { $or: [{ debut_per: updown }, { debut_per: '*' }] };
      break;
    case 8: //당좌비율
      filters = { $or: [{ quick_ratio: updown }, { quick_ratio: '*' }] };
      break;
    case 9: //유보율
      filters = { $or: [{ reserv_ratio: updown }, { reserv_ratio: '*' }] };
      break;
    case 10: //EPS
      filters = { $or: [{ eps: updown }, { eps: '*' }] };
      break;
    case 11: //EPS PER
      filters = { $or: [{ per: updown }, { per: '*' }] };
      break;
    case 12: //BPS
      filters = { $or: [{ bps: updown }, { bps: '*' }] };
      break;
    case 13: //BPS PER
      filters = { $or: [{ pbr: updown }, { pbr: '*' }] };
      break;
    case 14: //주당배당금
      filters = { $or: [{ weekly: updown }, { weekly: '*' }] };
      break;
    case 15: //시가배당률
      filters = { $or: [{ timely: updown }, { timely: '*' }] };
      break;
    case 16: //배당성향
      filters = { $or: [{ trend: updown }, { trend: '*' }] };
      break;
    default:
  }
  console.log(filters);
  return filters;
}

module.exports = router;

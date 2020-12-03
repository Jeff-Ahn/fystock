const express = require('express');
const path = require('path');
const financial = require('../model/Financial');
const company = require('../model/Company');
const { findByIdAndUpdate } = require('../model/Financial');
const protection = { _id: 0, __v: 0 };
const router = express.Router(); // 라우터 분리
var resultList=new Array();
var wait;
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
  var getfilters  = req.body;
  var makefilters;
  wait=0;
  console.log(getfilters);
  for (var i = 0; i < getfilters.length; i++) {
    if (getfilters[i].checkedState === 'up')
      updownFilter[i] ={$gte: getfilters[i].value};
    else if (getfilters[i].checkedState === 'down')
      updownFilter[i] = {$lte: getfilters[i].value};
    switch(getfilters[i].id)
    {
      case 1://매출액
        makefilters=Object.assign({$or:[{total:updownFilter[i]},{total:'*'}]},makefilters);
        break;
      case 2://영억이익
        makefilters=Object.assign({$or:[{sell:updownFilter[i]},{sell:'*'}]},makefilters);
        break;
      case 3://당기순이익
        makefilters=Object.assign({$or:[{pure:updownFilter[i]},{pure:'*'}]},makefilters);
        break;
      case 4://영억입익률
        makefilters=Object.assign({$or:[{sell_per:updownFilter[i]},{sell_per:'*'}]},makefilters);
        break;
      case 5://순이익률
        makefilters=Object.assign({$or:[{pure_per:updownFilter[i]},{pure_per:'*'}]},makefilters);
        break;
      case 6://ROE
        makefilters=Object.assign({$or:[{roe:updownFilter[i]},{roe:'*'}]},makefilters);
        break;
      case 7://부채비율
        makefilters=Object.assign({$or:[{debut_per:updownFilter[i]},{debut_per:'*'}]},makefilters);
        break;
      case 8://당좌비율
        makefilters=Object.assign({$or:[{quick_ratio:updownFilter[i]},{quick_ratio:'*'}]},makefilters);
        break;
      case 9://유보율
        makefilters=Object.assign({$or:[{reserv_ratio:updownFilter[i]},{reserv_ratio:'*'}]},makefilters);
        break;
      case 10://EPS
        makefilters=Object.assign({$or:[{eps:updownFilter[i]},{eps:'*'}]},makefilters);
        break;
      case 11://EPS PER
        makefilters=Object.assign({$or:[{per:updownFilter[i]},{per:'*'}]},makefilters);
        break;
      case 12://BPS
        makefilters=Object.assign({$or:[{bps:updownFilter[i]},{bps:'*'}]},makefilters);
        break;
      case 13://BPS PER
        makefilters=Object.assign({$or:[{pbr:updownFilter[i]},{pbr:'*'}]},makefilters);
        break;
      case 14://주당배당금
        makefilters=Object.assign({$or:[{weekly:updownFilter[i]},{weekly:'*'}]},makefilters);
        break;
      case 15://시가배당률
        makefilters=Object.assign({$or:[{timely:updownFilter[i]},{timely:'*'}]},makefilters);
        break;
      case 16://배당성향
        makefilters=Object.assign({$or:[{trend:updownFilter[i]},{trend:'*'}]},makefilters);
        break;
      default:
        break;
    }
  }
company.find({},function(err,companies)
{
  findData(companies,makefilters);
  if(wait!=0) res.json(resultList);
});

});

function findData(companies,makefilters)
{
  for(var i =0;i<companies.length;i++)
  {
    findAdd(companies[i],makefilters);
  }
}

function findAdd(company,makefilters)
{
  var addone=Object.assign({code:company.code},makefilters);
  financial.find(addone,function(err,data)
    {
      var addOne={
        "code":company.code,
        "name" :company.name 
      }
      if(data.length==4)
      {
        add(addOne);
      }
    });
}

function add(addOne)
{
  resultList.push(addOne);
  wait++;
}

module.exports = router;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let FinancialSchema = new Schema({
  code : String,
  date : String,
  totalls : Number,
  sell : Number,
  pure:Number,
  sell_per:Number,
  pure_per:Number,
  roe:Number,
  debut_per:Number,
  quick_ratio:Number,
  reserv_ratio:Number,
  eps:Number,
  per:Number,
  bps:Number,
  pbr:Number,
  weekly:Number,
  timely:Number,
  trend:Number
},
{
  collection:'annualFinancials',
  versionKey:false
});

module.exports = mongoose.model("Financial", FinancialSchema);

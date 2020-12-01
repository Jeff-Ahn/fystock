const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let FinancialSchema = new Schema({
  code: String,
  date: String,
  total: Number,
  sell: Number,
  pure: Number,
  sell_per: Number,
  pure_per: Number,
  roe: Number,
  debut_per: Number,
  quick_ratio: Number,
  reserv_ratio: Number,
  eps: Number,
  eps_per: Number,
  bps: Number,
  bps_per: Number,
  weekly: Number,
  timely: Number,
  trend: Number,
});

module.exports = mongoose.model('Financial', FinancialSchema);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let FinancialSchema = new Schema(
  {
    code: String,
    date: String,
    total: Schema.Types.Mixed,
    sell: Schema.Types.Mixed,
    pure: Schema.Types.Mixed,
    sell_per: Schema.Types.Mixed,
    pure_per: Schema.Types.Mixed,
    roe: Schema.Types.Mixed,
    debut_per: Schema.Types.Mixed,
    quick_ratio: Schema.Types.Mixed,
    reserv_ratio: Schema.Types.Mixed,
    eps: Schema.Types.Mixed,
    per: Schema.Types.Mixed,
    bps: Schema.Types.Mixed,
    pbr: Schema.Types.Mixed,
    weekly: Schema.Types.Mixed,
    timely: Schema.Types.Mixed,
    trend: Schema.Types.Mixed,
  },
  {
    collection: 'annualFinancials',
    versionKey: false,
  }
);

module.exports = mongoose.model('Financial', FinancialSchema);

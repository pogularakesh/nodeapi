'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaxSchema = new Schema({
  rate: {
    type: Number,
    required: 'Kindly enter the rate of the tax'
  },
  restrictionBased: {
    type: String
  },
  restrictionOfGti: {
    type: String
  },
  rateDescription: {
    type: String
  },
  applicableFrom: {
    type: Date
  },
  applicableTo: {
    type: Date
  }
});

module.exports = mongoose.model('Tax', TaxSchema);
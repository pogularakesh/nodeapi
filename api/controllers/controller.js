'use strict';


var mongoose = require('mongoose'),
  Tax = mongoose.model('Tax');

exports.list_all_tax = function(req, res) {
  Tax.find({}, function(err, tax) {
    if (err)
      res.send(err);
    res.json(tax);
  });
};




exports.create_a_tax = function(req, res) {
  var new_tax = new Tax(req.body);
  new_tax.save(function(err, tax) {
    if (err)
      res.send(err);
    res.json(tax);
  });
};


exports.read_a_tax = function(req, res) {
  Tax.findById(req.params.taskId, function(err, tax) {
    if (err)
      res.send(err);
    res.json(tax);
  });
};


exports.update_a_tax = function(req, res) {
  Tax.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, tax) {
    if (err)
      res.send(err);
    res.json(tax);
  });
};


exports.delete_a_tax = function(req, res) {


  Tax.remove({
    _id: req.params.taskId
  }, function(err, tax) {
    if (err)
      res.send(err);
    res.json({ message: 'Tax entry successfully deleted' });
  });
};
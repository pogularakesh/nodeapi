'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/controller');

  // todoList Routes
  app.route('/tax')
    .get(todoList.list_all_tax)
    .post(todoList.create_a_tax);


  app.route('/tax/:taxId')
    .get(todoList.read_a_tax)
    .put(todoList.update_a_tax)
    .delete(todoList.delete_a_tax);
};
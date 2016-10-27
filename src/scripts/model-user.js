var Backbone = require('Backbone');
var $ = require('jQuery');
console.log($);

var UserModel = Backbone.Model.extend({
  idAttribute: 'email',
})

var UserCollection = Backbone.Collection.extend({
  model: UserModel,
  url: 'https://randomuser.me/api?results=24',
  parse: function(rawJSONResponse) {return rawJSONResponse.results},
  initialize: function(){}
})

module.exports = UserCollection;

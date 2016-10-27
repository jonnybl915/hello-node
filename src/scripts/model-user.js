var Backbone = require('Backbone');
var $ = require('jQuery');
// console.log($);

var UserModel = Backbone.Model.extend({
  idAttribute: 'email',
})

var UserCollection = Backbone.Collection.extend({
  model: UserModel,
  url: '',
  parse: function(rawJSONResponse) {return rawJSONResponse.results},
  initialize: function(queryString){
    this.url = "https://randomuser.me/api?" + qryStr;
  }
})

module.exports = UserCollection;

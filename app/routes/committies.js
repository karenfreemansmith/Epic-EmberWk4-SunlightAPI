import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showSubs() {
      $('.sub').addClass('show');
    }
  },
  model: function() {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?per_page=all&apikey='+key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});

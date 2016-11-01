import Ember from 'ember';

export function committeeFilter(params) {
  var committee = params[0];

  if(committee.subcommittee === false) {
    return Ember.String.htmlSafe("<span class='glyphicon glyphicon-fire'></span>" + committee.name + '(' + committee.committee_id+ ")<br>");
  }
}

export default Ember.Helper.helper(committeeFilter);

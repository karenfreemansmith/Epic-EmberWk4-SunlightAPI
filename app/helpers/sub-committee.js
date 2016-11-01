import Ember from 'ember';

export function subCommittee(params) {
  var subcommittee = params[0];
  var id = params[1];

  if(subcommittee.parent_committee_id === id) {
    return Ember.String.htmlSafe("<li>" + subcommittee.name + '(' + subcommittee.committee_id+ ")</li>");
  }
}

export default Ember.Helper.helper(subCommittee);

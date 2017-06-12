import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  feedback: DS.attr(),
  replyto: DS.attr(),
  jibu: DS.attr(),
  know: DS.belongsTo('know', {async: true }),
});

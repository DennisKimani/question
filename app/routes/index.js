import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      knows:this.store.findAll('know'),
      answers:this.store.findAll('answer')
    });
  },
  actions: {
    saveKnow3(params) {
      var newKnow = this.store.createRecord('know', params);
      newKnow.save();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    }
  }
});

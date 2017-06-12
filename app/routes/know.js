import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('know', params.know_id);
  },
  actions: {
    update(know, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          know.set(key,params[key]);
        }
      });
      know.save();
      this.transitionTo('index');
    },

    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    },

    destroyKnow(know) {
      var answer_deletions = know.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return know.destroyRecord();
      });
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer',params);
      var know = params.know;
      know.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return know.save();
      });
      this.transitionTo('know', know);
    }
  }
});

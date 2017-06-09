import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('know');
  },

  actions: {
    saveKnow3(params) {
      varNewKnow = this.store.createRecord('know', params);
      newKnow.save();
      this.transitionTo('index');
    },
    
    destroyKnow(know) {
      know.destroyRecord();
      this.transitionTo('index');
    }
  }
});

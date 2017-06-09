import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('know');
  },

  actions: {
    destroyKnow(know) {
      know.destroyRecord();
      this.transitionTo('index');
    }
  }
});

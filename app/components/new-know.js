import Ember from 'ember';

export default Ember.Component.extend({
  addNewKnow: false,
  actions: {
    knowFormShow() {
      this.set('addNewKnow', true);
    }
  }
});

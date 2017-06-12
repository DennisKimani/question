import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('You are about to delete an answer. Do you want to proceed?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});

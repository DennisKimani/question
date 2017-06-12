import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(know) {
      if (confirm('You are about to delete a Question. Do you want to proceed?')) {
        this.sendAction('destroyKnow', know);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});

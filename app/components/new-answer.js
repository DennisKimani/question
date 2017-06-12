import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params= {
        name: this.get('name'),
        feedback: this.get('feedback'),
        replyto: this.get('replyto'),
        jibu:this.get('jibu'),
        know: this.get('know')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});

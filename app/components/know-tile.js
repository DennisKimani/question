import Ember from 'ember';

export default Ember.Component.extend({
  isExploreShowing: false,
  actions: {
    exploreShow: function() {
      this.set('isExploreShowing', true);
    },
    exploreHide: function() {
      this.set('isExploreShowing', false);
    },
    delete(know) {
      if (confirm('You are about to delete a Question. Do you want to proceed?')) {
        this.sendAction('destroyKnow', know);
      }
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  isExploreShowing: false,
  actions: {
    exploreShow: function() {
      this.set('isExploreShowing', true);
    },
    exploreHide: function() {
      this.set('isExploreShowing', false);
    }
  }
});

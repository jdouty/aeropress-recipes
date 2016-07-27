import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // this.store.createRecord('recipe', {
    //   title: "Original",
    //   method: "Standard"
    // }).save();

    return this.store.query('recipe', {
      orderBy: 'method',
      equalTo: 'Standard'
    });
  }
});

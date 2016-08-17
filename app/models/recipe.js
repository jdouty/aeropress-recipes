import DS from 'ember-data';
import Model from 'ember-data/model';
//import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: DS.attr('string'),
  method: DS.attr('string'),
  type: DS.attr('string'),
  coffeeVolume: DS.attr('string'),
  coffeeGrind: DS.attr('string'),
  waterVolume: DS.attr('string'),
  waterTemp: DS.attr('string')
});

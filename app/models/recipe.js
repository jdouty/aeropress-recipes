import DS from 'ember-data';
import Model from 'ember-data/model';
//import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: DS.attr('string'),
  method: DS.attr('string')
});

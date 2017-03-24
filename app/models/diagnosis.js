import DS from 'ember-data';

export default DS.Model.extend({
  upholderScore: DS.attr('number'),
  questionerScore: DS.attr('number'),
  rebelScore :DS.attr('number'),
  obligerScore :DS.attr('number')
});

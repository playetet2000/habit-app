import DS from 'ember-data';

export default DS.Model.extend({
  age: DS.attr('number'),
  habit: DS.attr('string'),
  tryto: DS.attr('string'),
  upholderScore: DS.attr('number'),
  questionerScore: DS.attr('number'),
  rebelScore :DS.attr('number'),
  obligerScore :DS.attr('number'),
  resultScore:DS.attr('string')
});

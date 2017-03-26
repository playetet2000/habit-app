import Ember from 'ember';

export default Ember.Controller.extend({




  responseMessage:'',
  upholderScore: 0,
  questionerScore: 0,
  rebelScore: 0,
  obligerScore: 0,
  result:'',
  upholderHappen:'',
  questionerHappen:'',
  rebelHappen:'',
  obligerHappen:'',


  questionResponse1:  0,
  questionResponse2:  0,
  questionResponse3:  0,
  questionResponse4:  0,
  questionResponse5:  0,
  questionResponse6:  0,
  questionResponse7:  0,
  questionResponse8:  0,
  questionResponse9:  0,
  questionResponse10:  0,
  questionResponse11:  0,
  questionResponse12:  0,
  questionResponse13:  0,
  questionResponse14:  0,
  questionResponse15:  0,
  questionResponse16:  0,


  questionResponse1Changed: Ember.observer('questionResponse1', function(){
    this.send('updateScores');
  }),

  questionResponse2Changed: Ember.observer('questionResponse2', function(){
    this.send('updateScores');
  }),

  questionResponse3Changed: Ember.observer('questionResponse3', function(){
    this.send('updateScores');
  }),

  questionResponse4Changed: Ember.observer('questionResponse4', function(){
    this.send('updateScores');
  }),

  questionResponse5Changed: Ember.observer('questionResponse5', function(){
    this.send('updateScores');
  }),

  questionResponse6Changed: Ember.observer('questionResponse6', function(){
    this.send('updateScores');
  }),

  questionResponse7Changed: Ember.observer('questionResponse7', function(){
    this.send('updateScores');
  }),

  questionResponse8Changed: Ember.observer('questionResponse8', function(){
    this.send('updateScores');
  }),

  questionResponse9Changed: Ember.observer('questionResponse9', function(){
    this.send('updateScores');
  }),

  questionResponse10Changed: Ember.observer('questionResponse10', function(){
    this.send('updateScores');
  }),

  questionResponse11Changed: Ember.observer('questionResponse11', function(){
    this.send('updateScores');
  }),

  questionResponse12Changed: Ember.observer('questionResponse12', function(){
    this.send('updateScores');
  }),

  questionResponse13Changed: Ember.observer('questionResponse13', function(){
    this.send('updateScores');
  }),

  questionResponse14Changed: Ember.observer('questionResponse14', function(){
    this.send('updateScores');
  }),

  questionResponse15Changed: Ember.observer('questionResponse15', function(){
    this.send('updateScores');
  }),

  questionResponse16Changed: Ember.observer('questionResponse16', function(){
    this.send('updateScores');
  }),

  actions: {

    caculateScore: function() {

      const trytobe = this.get('trytry');
      const age = this.get('age');
      const habit = this.get('habit');
      const finalUpholder = this.get('upholderScore');
      const finalQuestioner = this.get('questionerScore');
      const finalRebel = this.get('rebelScore');
      const finalObliger = this.get('obligerScore');

       this.set('rebelHappen','');
       this.set('questionerHappen','');
       this.set('obligerHappen','');
       this.set('upholderHappen','');

      if (finalUpholder > finalQuestioner && finalUpholder > finalObliger && finalUpholder > finalRebel){
        this.set('result','Upholder');
        this.set('upholderHappen',"upholerShow")

      } else if (finalQuestioner >= finalRebel && finalQuestioner >= finalObliger && finalQuestioner >= finalUpholder )
        {
          this.set('result','Questioner');
          this.set('questionerHappen',"questionerShow")
        } else if (finalObliger >= finalRebel && finalObliger >= finalUpholder && finalObliger > finalObliger)
        {
          this.set('result','Obliger');
          this.set('obligerHappen',"obligerShow")
        } else if (finalRebel > finalUpholder && finalRebel > finalObliger && finalRebel > finalQuestioner)
           {
             this.set('result','Rebel');
             this.set('rebelHappen',"rebelShow")
           }

      const finalResult = this.get('result');
      const newFinalScore = this.store.createRecord('diagnosis',{

        age:age,
        habit:habit,
        tryto:trytobe,
        upholderScore:finalUpholder,
        questionerScore:finalQuestioner,
        rebelScore:finalRebel,
        obligerScore:finalObliger,
        resultScore:finalResult,

      });
       newFinalScore.save();


        $('#myModal').modal('show');





      },





  updateScores: function() {


    this.set('upholderScore',0);
    this.set('questionerScore',0);
    this.set('rebelScore',0);
    this.set('obligerScore',0);

    var responseTextValues = new Array();
    responseTextValues.push(this.get('questionResponse1'));
    responseTextValues.push(this.get('questionResponse2'));
    responseTextValues.push(this.get('questionResponse3'));
    responseTextValues.push(this.get('questionResponse4'));
    responseTextValues.push(this.get('questionResponse5'));
    responseTextValues.push(this.get('questionResponse6'));
    responseTextValues.push(this.get('questionResponse7'));
    responseTextValues.push(this.get('questionResponse8'));
    responseTextValues.push(this.get('questionResponse9'));
    responseTextValues.push(this.get('questionResponse10'));
    responseTextValues.push(this.get('questionResponse11'));
    responseTextValues.push(this.get('questionResponse12'));
    responseTextValues.push(this.get('questionResponse13'));
    responseTextValues.push(this.get('questionResponse14'));
    responseTextValues.push(this.get('questionResponse15'));
    responseTextValues.push(this.get('questionResponse16'));

    for (var i = 0; i < responseTextValues.length; i++) {
      var responseText = responseTextValues[i];
      if (responseText == 'upholder') {
        this.set('upholderScore', this.get('upholderScore') + 1);
      } else if (responseText == 'questioner'){
        this.set('questionerScore', this.get('questionerScore') + 1);
      } else if (responseText == 'rebel'){
        this.set('rebelScore', this.get('rebelScore') + 1);
      } else if (responseText == 'obliger'){
        this.set('obligerScore', this.get('obligerScore') + 1);
      } else if (responseText == 'rebelminus'){
        this.set('rebelScore', this.get('rebelScore') - 1);
      } else if (responseText == 'questionerminus'){
        this.set('questionerScore', this.get('questionerScore') - 1);
      } else if (responseText == 'obligerminus'){
        this.set('obligerScore', this.get('obligerScore') - 1);
      }
    }
    //processResponseandUpdate(this.questionResponse2);
    console.log(
      'Upholder: '+this.get('upholderScore') + '\n' +
      'Questioner: '+this.get('questionerScore') + '\n' +
      'Rebel: '+this.get('rebelScore') +'\n' +
      'Obliger: '+this.get('obligerScore') +'\n'
    );
  }

}

});

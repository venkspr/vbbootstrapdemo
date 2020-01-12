define([ 'ojs/ojarraydataprovider','ojs/ojtimeline'], 
function(
ArrayDataProvider) {
  'use strict';
  var data =`[
      {
          "seriesId": "Rafael Nadal: 75-5",
          "id": "e1",
          "title": "ATP VTR Open",
          "start": "2013-02-04",
          "end": "2013-02-10",
          "description": "Finalist: 3-1"
      },
      {
          "seriesId": "Rafael Nadal: 75-5",
          "id": "e2",
          "title": "ATP Brasil Open",
          "start": "2013-02-11",
          "end": "2013-02-13",
          "description": "Champion: 4-0"
      }`;
  
  var PageModule = function PageModule() {
     
  
    };

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.console = function (arg1) {
    console.log('inside log');
    console.log(arg1);
  };

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.createADP = function (arg1,arg2) {
    console.log('---------------');
    console.log('inside create adp');
    console.log(arg1);
    //arg2=new ArrayDataProvider(JSON.stringify(arg1), { keyAttributes: 'id' });
    return new ArrayDataProvider(JSON.stringify(arg1), { keyAttributes: 'id' });
  };

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.adpMaker = function (arg1) {
           var dataProvider = new ArrayDataProvider(JSON.parse(data), {keyAttributes: 'id'});
           console.log(dataProvider);
           return dataProvider;
  };

  return PageModule;
});

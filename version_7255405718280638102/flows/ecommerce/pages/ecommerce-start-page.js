define(['ojs/ojarraydataprovider'], function(ArrayDataProvider) {
  'use strict';

  var PageModule = function PageModule() {};

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.console = function (arg1,arg2,arg3) {
    console.log('arg1');
    console.log(arg1);
    console.log('arg1 end');
    console.log(arg2);
    console.log(arg3);
  };

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.pushAdp = function (data, adp,shoppingCartArray) {
    if(shoppingCartArray.findIndex(x => x.id ===data.data.id)==-1){
              data.data.quantity=1;
              shoppingCartArray.push(data.data);
    }else{
              shoppingCartArray[shoppingCartArray.findIndex(x => x.id ===data.data.id)].quantity++;
    }
     shoppingCartArray[0].total=shoppingCartArray.reduce((total,value)=>total+value.quantity*value.price,0);
    return shoppingCartArray;
  };

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.removeItem = function (arg1,arg2,arg3,shoppingCartArray) {
    shoppingCartArray.splice(shoppingCartArray.findIndex(x => x.id ===arg1.row.id),1);
    if(shoppingCartArray.length>0){
    shoppingCartArray[0].total=shoppingCartArray.reduce((total,value)=>total+value.quantity*value.price,0);
  }
    return shoppingCartArray;
  };

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.changeQuantity = function (rowData,value,shoppingCartArray ) {
     shoppingCartArray[shoppingCartArray.findIndex(x => x.id ===rowData.row.id)].quantity=value;
     shoppingCartArray[0].total=shoppingCartArray.reduce((total,value)=>total+value.quantity*value.price,0);
     return shoppingCartArray;
  };

  return PageModule;
});

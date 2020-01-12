define(['knockout', 'ojs/ojbootstrap', 
      'ojs/ojarraydataprovider','ojs/ojattributegrouphandler', 'ojs/ojknockout', 
      'ojs/ojthematicmap', 'ojs/ojlegend', 'ojs/ojlabel'], 
      function(ko, Bootstrap, ArrayDataProvider,ojattributegrouphandler) {
    'use strict';
    
 var samerica	=	"https://objectstorage.us-ashburn-1.oraclecloud.com/n/idfouljtoxcc/b/demo/o/south_america_countries.json";
var namerica	=	"https://objectstorage.us-ashburn-1.oraclecloud.com/n/idfouljtoxcc/b/demo/o/north_america_countries.json";
var world	=	"https://objectstorage.us-ashburn-1.oraclecloud.com/n/idfouljtoxcc/b/demo/o/world_countries.json";
var asia	=	"https://objectstorage.us-ashburn-1.oraclecloud.com/n/idfouljtoxcc/b/demo/o/asia_countries.json";
var australia	=	"https://objectstorage.us-ashburn-1.oraclecloud.com/n/idfouljtoxcc/b/demo/o/australia_countries.json";
var africa	=	"https://objectstorage.us-ashburn-1.oraclecloud.com/n/idfouljtoxcc/b/demo/o/africa_countries.json";
var europe	=	"https://objectstorage.us-ashburn-1.oraclecloud.com/n/idfouljtoxcc/b/demo/o/europe_countries.json";
var india="https://objectstorage.us-ashburn-1.oraclecloud.com/n/idfouljtoxcc/b/demo/o/india.geojson.json";
  var PageModule = function PageModule() {};

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
var arr=ko.observableArray([]);

   var url="https://objectstorage.us-ashburn-1.oraclecloud.com/n/idfouljtoxcc/b/demo/o/us_states.json";
   //https://objectstorage.us-ashburn-1.oraclecloud.com/n/idfouljtoxcc/b/demo/o/gz_2010_us_040_00_500k.json
   //var url='https://objectstorage.us-ashburn-1.oraclecloud.com/n/idfouljtoxcc/b/demo/o/gz_2010_us_040_00_500k.json';
   var rainFall="https://objectstorage.us-ashburn-1.oraclecloud.com/n/idfouljtoxcc/b/demo/o/rain_fall.json"


PageModule.prototype.loadMap = function()

  {
     return new Promise(function(resolve, reject) {
            var mapProvider = ko.observable();
              $.getJSON( india, data => {     
                     mapProvider({
                  geo: data,
                  propertiesKeys: {
                    id: 'cartodb_id',
                    shortLabel: 'name',
                    longLabel: 'name'
                    }
                  });
               resolve(mapProvider);
           }, function(error) {
              console.log(error);
               reject("The error is: " + error);

           });

     });
  };
 PageModule.prototype.dataProvider = function (mapData) {
          var dataProvider=[];
          var handler=new ojattributegrouphandler.ColorAttributeGroupHandler();
          
         mapData.geo.features.forEach(element=>{
             console.log(Object.keys(element.properties));
             element.properties.color=handler.getValue(Math.floor(element.properties.cartodb_id));
             element.properties.size=Math.floor(Math.random() * Math.floor(10)); 
             dataProvider.push(element.properties);
            });
            return dataProvider;
  };
  

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  PageModule.prototype.console = function (arg1) {
      console.log(arg1);
  };

  return PageModule;
});

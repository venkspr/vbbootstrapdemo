define(['ojs/ojthematicmap','ojs/ojarraydataprovider'], function(Map,ArrayDataProvider) {
    'use strict';

    var AppModule = function AppModule() {};

    /**
     *
     * @param {String} arg1
     * @return {String}
     */
    AppModule.prototype.toggleMenu = function(arg1) {

        $("li.nav-item.has-treeview").on("click", function(e) {
                e.preventDefault();
                console.log(e);
                console.log(e.target);
                console.log($(e.target).attr('class'));
                console.log($(e.target).parent().attr('class'));
                
                console.log(event.target.nodeName);

                if ((($(e.target).attr('class') == 'nav-link') && $(e.target).parent().attr('class') !=='nav-item') || ($(e.target).hasClass('right'))) {
                    $("li.nav-item.nav-link").removeClass('active');
                    $(this).toggleClass("menu-open", 5000);
                    $(this).addClass('active');
                    };
                }); 

    }

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  AppModule.prototype.loadMapData = function (arg1) {
    var mapProvider = {
            geo: JSON.parse(arg1),
              propertiesKeys: {
              id: 'sLabel',
              shortLabel: 'sLabel',
              longLabel: 'lLabel'
            }
        };
        console.log("states data");
        
        console.log(mapProvider);
        console.log(mapProvider.geo.type);
        return mapProvider;
  };

  /**
   *
   * @param {String} arg1
   * @return {String}
   */
  AppModule.prototype.setADP = function (arg1) {
       console.log(arg1);
    var tmapDataProvider = new ArrayDataProvider(JSON.parse('[     {       "location": "AL",       "category": "Initial"     },     {       "location": "FL",       "category": "Qualification"     },     {       "location": "TX",       "category": "Meeting"     },     {       "location": "MS",       "category": "Proposal"     },     {       "location": "OH",       "category": "Close"     },     {       "location": "MA",       "category": "Initial"     },     {       "location": "RI",       "category": "Qualification"     },     {       "location": "NH",       "category": "Meeting"     },     {       "location": "OR",       "category": "Proposal"     },     {       "location": "WA",       "category": "Close"     },     {       "location": "UT",       "category": "Initial"     },     {       "location": "CO",       "category": "Qualification"     },     {       "location": "SD",       "category": "Meeting"     },     {       "location": "IA",       "category": "Proposal"     },     {       "location": "MO",       "category": "Close"     },     {       "location": "AR",       "category": "Initial"     },     {       "location": "PA",       "category": "Qualification"     },     {       "location": "WV",       "category": "Meeting"     },     {       "location": "NY",       "category": "Proposal"     },     {       "location": "ME",       "category": "Close"     }   ]'), { keyAttributes: 'location' });
    console.log(tmapDataProvider);
    return tmapDataProvider;
  };

    return AppModule;
});
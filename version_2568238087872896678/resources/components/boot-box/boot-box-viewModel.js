define([
    'knockout',
    'ojs/ojcore'
], function (
    ko,
    oj
) {
    'use strict';

    function bootBoxComponentModel(context) {
        var self = this;

        // At the start of your viewModel constructor.
        var busyContext = oj.Context.getContext(context.element).getBusyContext();
        var options = {'description': 'Component Startup - Waiting for data'};
        self.busyResolve = busyContext.addBusyState(options);
        self.composite = context.element;
        self.properties = context.properties;

        // Example observable.
        self.messageText = ko.observable('Hello from Example Component');

        // Once all startup and async activities have finished, relocate if there are any async activities.
        self.busyResolve();
    }

    // Lifecycle methods - uncomment and implement if necessary.
    // bootBoxComponentModel.prototype.activated = function(context){
    // };

    // bootBoxComponentModel.prototype.connected = function(context){
    // };

    // bootBoxComponentModel.prototype.bindingsApplied = function(context){
    // };

    // bootBoxComponentModel.prototype.propertyChanged = function(propertyChangedContext){
    // };

    // bootBoxComponentModel.prototype.disconnected = function(element){
    // };

    return bootBoxComponentModel;
});
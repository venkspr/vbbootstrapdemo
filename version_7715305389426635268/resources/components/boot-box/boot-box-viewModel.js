define(["knockout","ojs/ojcore"],function(b,c){function a(g){var e=this;var d=c.Context.getContext(g.element).getBusyContext();var f={description:"Component Startup - Waiting for data"};e.busyResolve=d.addBusyState(f);e.composite=g.element;e.properties=g.properties;e.messageText=b.observable("Hello from Example Component");e.busyResolve()}return a});
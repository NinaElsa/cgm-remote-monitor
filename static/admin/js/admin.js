(function () {
  'use strict';
  //for the tests window isn't the global object
  var Nightscout = window.Nightscout;
  var client = Nightscout.client;
  var admin_plugins = Nightscout.admin_plugins;

  client.init(Nightscout.plugins, function loaded () {
    // init HTML code
    admin_plugins.createHTML( client );
  });

})();

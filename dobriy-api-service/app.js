'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);
  console.log("\x1b[35m", "Не будь дураком — в app.js в api-service измени строку, допиши твой /someService вместо /recommendations! \n", '\x1b[0m');
  console.log("try this:\ncurl http://127.0.0.1:" + port + "/api/v1/map");

});

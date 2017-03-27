var Interfake = require('interfake');
var interfake = new Interfake();
interfake.get('/get-text').body({
    text:'A custom component!'
});
interfake.listen(3000);
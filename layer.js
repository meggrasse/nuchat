var layer = require('layer-websdk');

var client = new layer.Client({
    appId: "layer:///apps/staging/2f83705a-dc0f-11e5-a726-fd7502003d5a"
});

client.on('challenge', function(evt) {
  /*
   * CODE goes here. Post the nonce to your backend, generate and return an Identity Token
   */
});
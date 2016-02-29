var layer = require('layer-websdk');

/*
 * 1. Instantiate your client.  The client will obtain a nonce automatically.
 *    Each nonce is valid for 10 minutes after creation, after which you will have
 *    to call `login()` to generate a new one.
 */
var client = new layer.Client({
    appId: "layer:///apps/staging/2f83705a-dc0f-11e5-a726-fd7502003d5a"
});

/*
 * 2. On receiving a nonce via the `challenge` event,
 *    Connect to your Identity Web Service to generate an Identity Token. In addition
 *    to your Layer App ID, User ID, and nonce, you can choose to pass in any other
 *    parameters that make sense (such as a password), depending on your App's login
 *    process.
 */
client.on('challenge', function(evt) {
    // evt has properties `evt.nonce` and `evt.callback`.
    getIdentityToken(evt.nonce, function(identityToken) {
        /*
         * 3. Submit identity token to Layer for validation
         */
        evt.callback(identityToken);
    })
});

/*
 * 4. The `ready` event is triggered once the identity token has been
 *    validated and a Layer session created.
 */
client.on('ready', function() {
    renderMyUI(client);
});

// Creates a new conversation object with sample participant identifiers
var conversation = client.createConversation(["Peer Listener"]);

// Create a message part with a string of text
var messagePart = new layer.MessagePart({
    body: 'Hi, how are you?',
    mimeType: 'text/plain'
});

// Creates a new message object within the conversation and containing an
// array of message parts
var message = conversation.createMessage({ parts: [messagePart] });

// Sends the specified message
message.send();

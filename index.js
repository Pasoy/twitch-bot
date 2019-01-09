const tmi = require('tmi.js');
const secret = require('./config/secret');

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: secret.USERNAME,
        password: secret.SECRETT_KEY
    },
    channels: [
        secret.CHANNEL
    ],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action(secret.CHANNEL, '\'Sup, I am now connected');
});

client.on('chat', (channel, user, message, self) => {
    if(message === '!owo') {
        client.action(secret.CHANNEL, 'owo whats dis');
    }
});
var tmi = require("tmi.js");
var notif = require("node-notifier");
var client = new tmi.Client({
    channels: ['AriaSaki']
});
client.connect();
var hashMap = new Map();
client.on('message', function (channel) {
    var _a;
    hashMap.set(channel, hashMap.has(channel) ? hashMap.get(channel) + 1 : 0);
    if (hashMap.get(channel) == 5) {
        notif.notify("".concat(channel, " is live right now"));
    }
    console.log(channel, (_a = hashMap.get(channel)) !== null && _a !== void 0 ? _a : 0);
});

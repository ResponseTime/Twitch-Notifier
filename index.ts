const tmi = require("tmi.js") 
const notif = require("node-notifier")

const client = new tmi.Client({
	channels: [ 'Keydae','AriaSaki','ThePrimeagen','pokimane','tarik','joona','TenZ','aceu' ]
});

client.connect();

const hashMap: Map<string,number> = new Map()

client.on('message', (channel: string) => {
  hashMap.set(channel,hashMap.has(channel)?hashMap.get(channel)??0+1:0)
  if(hashMap.get(channel)==5){
    notif.notify(`${channel} is live right now`)
  }
});

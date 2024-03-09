const tmi = require("tmi.js") 
const notif = require("node-notifier")

const client = new tmi.Client({
	channels: [ 'Kyedae','AriaSaki','ThePrimeagen','pokimane','tarik','joona','TenZ','aceu' ]
});

client.connect();

const hashMap: Map<string,number> = new Map()

client.on('message', (channel: string) => {
  hashMap.set(channel,hashMap.has(channel)?hashMap.get(channel)+1:0)
  if(hashMap.get(channel)==15){
    notif.notify(`${channel} is live right now`)
  }
  console.log(channel,hashMap.get(channel))
});

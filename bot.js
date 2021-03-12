const token = "ODE5MjkyNjMwMzAyNDU3OTQ2.YEkfuA.mXP9PTcSdNlKwyLYiyUQ7ATky0w";
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const randomCat = require('random.cat.js');
const rbx = require("noblox.js");
const prefix = "!"
const group = "8405592"
const bloxlink = require('bloxlink-api')
const { Player } = require("music-player-akumis");
const player = new Player(client);

client.player = player;

client
  .on("message", message => {
    if (message.content == `${prefix}cat`) {
      const randomCatApi = randomCat.api();
      randomCatApi.getCat().then((cat) => {
        message.channel.send(cat.file);
        console.log(cat.file)
        fs.readFile('freecats.txt', 'utf8', function (err, data) {
          fs.writeFileSync('freecats.txt', `${data} 
          ${cat.file}`);
        })
      })
    }
  }
  )

  client
  .on("message", message => {
    if (message.content.startsWith(`${prefix}icon`)) {
     if (message.attachments.first()) {
        if (message.author.id == "771183224961499156") {
          client.user.setAvatar(message.attachments.first().url)
        }
      }
     }
    }
  )



client.login(token);


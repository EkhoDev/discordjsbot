const Discord = require('discord.js');
const bot = new Discord.Client(); //to avoid confusion when using the discord.js docs change this from bot to client
const prefix = 'XD' //prefix change to desired prefix
const fs = require('fs');

bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`);      //logging in stuff
	console.log('Ready!');
});

bot.login('your token here');


bot.on('message', message => {
	var uptimeinsec = (bot.uptime / 1000 + ' Seconds ');
	var uptimeinmin = (bot.uptime / 60000 + ' Minutes '); //for the uptime command 
	var uptimeinminnotext = (bot.uptime / 60000);
	var uptimeinhrs = (uptimeinminnotext / 60 + '  Hours.');
	if (message.content === prefix + 'ping') {

		message.reply('Pong'); //another ping command	
	}

	if (message.content === prefix + 'uptime') {

		message.reply(uptimeinsec + uptimeinmin + uptimeinhrs); //the amount of time the bot has been running non stop for
		console.log(uptimeinsec + uptimeinmin + uptimeinhrs); //log it cause i can
	}

	if (message.content === prefix + 'ping') {

		message.reply(bot.ping + ' ms.');
		console.log(bot.ping + ' ping in ms.');    //just a ping command
	}

	if (message.content === prefix + 'avatarurl') {      //gives you URL to your avatar

		message.reply(message.author.avatarURL);
		console.log('Successfully displayed avatar URL.') //logged it to console cause why not
	}

	if (message.content === prefix + 'discordage') {

		message.reply(message.author.createdAt + '' + ' was the date and time your account was created.');    //quite a interesting command, i liked it so i added it :)
		console.log(message.author);
		console.log(message.author.createdAt + ' the date and time the account listed above was created.');
	}

	if (message.content === prefix + 'XD') {

		message.reply('XD');   //don't ask
	}

	if (message.content === prefix + 'amipremium') {

		message.reply(message.author.premium + ' '); //broken, got find out how to fix, the function is to see if user has discord premium
	}

	if (message.content === prefix+'roll'){ /* longest command so far, took 3 ish hours to figure out and 
		testing out various versions, well gg, i did it a lottery system, now to add coins..... */
		
		var randomnumber = Math.floor(Math.random() * 50) + 1
		var randomnumber2 = Math.floor(Math.random() * 50) + 1
		var randomnumber3 = Math.floor(Math.random() *50) +1 

		if (randomnumber <25){
			if (randomnumber2 <25){
				if (randomnumber3 <25){
					message.channel.send(':lemon:'+':lemon:'+':lemon:');
					message.reply('Congrats you won!, +100 Coins');
					fs.writeFile('coins.txt',message.author + ' +100 coins', (err) => {
						if (err) throw err;
						console.log('Saved coins to coins.txt');

					});
					
				}else{
					message.channel.send(':lemon:'+':lemon:'+':strawberry:');
					message.reply('you lost better luck next time!');
				}
			}else{
				if(randomnumber <25){
					message.channel.send(':lemon:'+':strawberry:'+':lemon:');
					message.reply('you lost better luck next time!');
				}else{
					message.channel.send(':lemon:'+':strawberry:'+':strawberry:');
					message.reply('you lost better luck next time!');
				}
			}
		}else{
			if(randomnumber <25){
				if(randomnumber2 <25){
					message.channel.send(':strawberry:'+':lemon:'+':lemon:');
					message.reply('you lost better luck next time!');
				}
			}else{
				if(randomnumber3 <25){
						message.channel.send(':strawberry:'+':strawberry:'+':lemon:');
						message.reply('you lost better luck next time!');
					
				}else{
					message.channel.send(':strawberry:'+':strawberry:'+':strawberry:');
					message.reply('Congrats you won!, +100 Coins');
					
					fs.writeFile('coins.txt',message.author + ' +100 coins', (err) => {
						if (err) throw err;
						console.log('Saved coins to coins.txt');

					});
				}
			}
		}
	}
	if (message.content === prefix+'coins'){
		fs.readFile('coins.txt','utf8', function (err, contents){
			message.channel.send(contents)
		});	
	}

	if (message.content === prefix+'faucet'){
		fs.writeFile('coins.txt',message.author + ' +50 coins', (err) => {
			if (err) throw err;
			console.log(message.author.tag +' redeemed 50 coins.');
			message.reply('Redeemed 50 coins.');
		})
	}
});





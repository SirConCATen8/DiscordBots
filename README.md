# DiscordBots
A collection of code for my Discord Bots

This is a basic build for a JavaScript-based Discord bot. The Listener.js script builds a listener that signs into the Discord provided bot ID and performs asynchronous actions when the built-in triggers are fulfilled by users on the servers the bot is active in. Using Discord.js, the bot can respond to users in the proper servers and make use of rich API tools for Discord stats.

# Setting Up for Automatic Use
I use AWS to host my bot server. AWS makes the process much easier with tools such as Cloud9, which is the IDE I spent most of the time working on this bot in. It gives you full directory access within your EC2 virtual instance and allows you to create terminal windows and initialize services.

For the instance, you can use a small EC2 instance to run a bot that isn't going to face a huge amount of interaction. I use a t3.nano EC2 instance that runs constantly in the US East 1 Region (Northern VA), the current cost of operation sits around $10/mo. You will not need to set up a static IP address, as the Discord API allows the client to login from any address as long as the OAuth token is correct.

## PM2
I use PM2 to automate the process of starting the bot. With a few simple lines in the terminal, I can build a PM2 script to start the bot every time the EC2 instance restarts. The complete documentation for PM2 can be found [here](https://pm2.keymetrics.io/docs/usage/quick-start/).
```
$ pm2 startup
$ sudo su -c "env PATH=$PATH:/home/unitech/.nvm/versions/node/v14.3/bin pm2 startup <distribution> -u <user> --hp <home-path>
$ pm2 start Listener.js --watch
$ pm2 save
```
The --watch flag will restart the bot every time a change is made to the listener file.

If you want to check on the bot, or you have multiple bots running on the same EC2 instance using PM2 you can use the following to check:
```
$ pm2 status
```

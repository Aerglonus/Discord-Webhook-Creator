import "dotenv/config"
import { Client, Events, GatewayIntentBits } from "discord.js"

const token = process.env.TOKEN;
const channelId = process.env.CHANNEL_ID
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);

  const channel = client.channels.cache.get(channelId)

  channel.createWebhook({
    name: 'test',
    avatar: 'https://i.imgur.com/AfFp7pu.png',
  })
    .then(webhook => console.log(`Created webhook ${webhook.url}`))
    .catch(console.error);
});

// Log in to Discord with your client's token
client.login(token);

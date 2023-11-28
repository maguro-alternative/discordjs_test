import { type Message, Client } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages']
})

client.once('ready', () => {
  console.log('Ready!')
  console.log(client.user?.tag)
})

client.on('messageCreate', async (message: Message) => {
  if (message.author.bot) return
  if (message.content.startsWith('!ping')) {
    void message.channel.send('Pong!')
  }
})

void client.login(process.env.TOKEN)

const axios = require('axios')
const {toReal} = require('./utils')
const { Client, GatewayIntentBits, EmbedBuilder  } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
var cron = require('node-cron');
const server = require('./server.js')


cron.schedule('* * * * *', () => {
    
    axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/').then(res => {

        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Bitcoin today')
        .setThumbnail('https://bitcoin.org/img/icons/opengraph.png?1662473327')
        .addFields(
            { name: 'BRL', value: toReal(res.data.ticker.buy) }
        )

        client.login("MTAxODE2NjkzNTg5ODI5NjQ0MA.GrSLuV.klHQVtNkY94z3u7v1HjDJ5beOjG6swM3gJxgSU").then(() => {
            client.channels.cache.get(process.env.TOKEN)?.send({ embeds: [exampleEmbed] });
        })
    })
}, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
});


server()



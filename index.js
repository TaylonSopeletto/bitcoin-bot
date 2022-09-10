const axios = require('axios')
const {toReal} = require('./utils')
const { Client, GatewayIntentBits, EmbedBuilder  } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
var cron = require('node-cron');


cron.schedule('0 8 * * *', () => {
    
    axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/').then(res => {

        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Bitcoin today')
        .setDescription('Some description here')
        .setThumbnail('https://bitcoin.org/img/icons/opengraph.png?1662473327')
        .addFields(
            { name: 'BRL', value: toReal(res.data.ticker.buy) }
        )

        client.login(process.env.TOKEN).then(() => {
            client.channels.cache.get('1018182387236098168')?.send({ embeds: [exampleEmbed] });
        })
    })
}, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
});




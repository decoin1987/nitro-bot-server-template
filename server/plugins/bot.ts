import TelegramBot from 'node-telegram-bot-api'

process.env.NTBA_FIX_350 = String(true);

export const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});

export default (async () => {
    bot.on('polling_error', (error) => {

    });

    bot.on('message', async (msg, metadata) => {

    })
    bot.on('callback_query', async (query) => {

    })
})

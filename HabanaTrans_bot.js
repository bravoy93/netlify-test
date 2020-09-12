const Telegraf = require('telegraf');

const habanaTrans_bot = new Telegraf('1203098375:AAHFdczOhXsg-shmt0l3j73owKWZ2fo-Oyc');

habanaTrans_bot.start((ctx) => {
  console.log(ctx)
  ctx.reply(`Hello my friend ${ctx.from.first_name}! How can I help you?`)
});

habanaTrans_bot.command('agentasad', (ctx) => {
  ctx.reply('Ohh, I am very sad ohh')
});

habanaTrans_bot.hears([/puta/ig, 'anormal', 'fea', 'loca'], (ctx) => {
  ctx.reply('tu madre!')
});

habanaTrans_bot.launch();


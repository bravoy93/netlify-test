// import {commandsList} from "./src/commands";

const commandsList = [
  {command: 'terminales', description: 'Listado de terminales'},
  {command: 'rutas', description: 'Listado de rutas'},
]
const Telegraf = require('telegraf');

const habanaTrans_bot = new Telegraf('1328704286:AAERXRqYWA1AaZ6OxGMf8a_j_qFV8j9URu8');


/* Comandos por defecto */
habanaTrans_bot.start((ctx) => {
  // console.log(ctx)
  ctx.reply(`Hola estimado(a) ${ctx.from.first_name}!\n\n\rMi función es ayudarle brindándole toda la información a mi alcance sobre el transporte público en nuestra ciudad habanera. Para ello use los comandos de que dispongo para ese empeño. 😊`);
  let cmdListMsg = 'Comandos disponibles:';
  let i = 0;
  while (i++ < commandsList.length) {
    cmdListMsg += `\n/${commandsList[i - 1].command} - ${commandsList[i - 1].description}`;
  }
  ctx.reply(cmdListMsg);
});

/* Comandos personalizados */
habanaTrans_bot.command('terminales', (ctx) => {
  ctx.reply('Listado de terminales');
  ctx.reply('Terminal 1 \nTerminal 2 \nTerminal 3');
});

habanaTrans_bot.command('rutas', (ctx) => {
  ctx.reply('Por favor seleccione una de las categorías de ruta');
  ctx.reply('Red Principal \nRed Alimentadora \nRutero y Metrotaxi \nRed Fecrrocarril \nHabana Bus Tour');
});

/* Palabras prohibidas y otras reglas */
habanaTrans_bot.hears([/puta/ig, 'anormal', 'fea', 'loca'], (ctx) => {
  ctx.reply('tu madre!')
});

habanaTrans_bot.launch();


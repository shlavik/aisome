import TelegramBot from "node-telegram-bot-api";
import { JsonDB, Config } from "node-json-db";

const token = process.env.BOT_TOKEN;
const webAppBaseUrl = "https://shlavik.github.io/galaimagebot";

const db = new JsonDB(new Config("bot/db", true, true, "/"));
const logs = new JsonDB(new Config("bot/logs", true, false, "/"));

console.warn("¡b0t!");

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const messageId = msg.message_id;
  const lang = msg.from.language_code;
  const userId = msg.chat.id;
  const username = msg.chat.username;
  const name = msg.chat.first_name;
  const contact = msg.contact;
  const answersStr = msg.web_app_data?.data;
  const text = msg.text;

  let userData = { userId, username, name, lang };

  try {
    userData = await db.getData("/" + userId);
  } catch (error) {
    console.warn("NEW USER!");
    await db.push("/" + userId, userData);
  }

  if (text === "/start") {
    handleStart(userData);
    return;
  }

  if (answersStr) {
    handleWebAppData(userData, answersStr);
    return;
  }

  if (contact) {
    handleContact(userData, contact);
    return;
  }

  bot.sendMessage(userId, "To start, type /start");
});

async function handleStart({ userId, username, lang, phone, answers }) {
  await bot.sendMessage(userId, "Hello, dear human @" + username + "!");
  if (!answers) {
    await bot.sendMessage(
      userId,
      `We invite you to take part in an interactive study of individual perception and interpretation of abstract images – digital arts, connection with emotional and cognitive processes, life satisfaction and well-being. Completed communication via the app will take from 5 to 10 minutes of your time. All data of your activity while the application is running will be available for research purposes only.`
    );
    showTakeTheSurveyButton(userId, lang);
    return;
  }
  if (!phone) return showShareContactButton(userId);
  await bot.sendMessage(userId, "You did your best, nothing to do!", {
    reply_markup: {
      remove_keyboard: true,
    },
  });
}

async function handleWebAppData({ userId, username, lang, phone }, answersStr) {
  const answersObj = JSON.parse(answersStr);
  await db.push("/" + userId + "/answers", answersObj);
  console.warn("NEW ANSWERS!");
  await bot.sendMessage(
    userId,
    "Congrats, you are done this survey!\nThank you for taking part of it!"
  );
  await bot.sendMessage(
    userId,
    "Your total score: 💚💛💚\n\nNote:\n1st emoji heart is your rate of positive;\n2nd emoji heart is your rate of life satisfaction;\n3rd emoji heart is your well-being rate.\n\nThe color of emoji heart indicates the volume of rates: 🚥\n\nHave an idea and a feed, please contact with us.\nStay well and safe!"
  );
  showShareContactButton(userId);
}

async function handleContact(userData, contact) {
  const phone = contact.phone_number;
  userData.phone = phone;
  await db.push("/" + userData.userId + "/phone", phone);
  await bot.sendMessage(userData.userId, "Thanks for sharing!", {
    reply_markup: {
      remove_keyboard: true,
    },
  });
}

async function showTakeTheSurveyButton(userId, lang) {
  const surveyBtn = {
    text: "🗳 Take the Survey!",
    web_app: {
      url: webAppBaseUrl + "/diversity-3q#lang=" + lang,
    },
  };
  await bot.sendMessage(
    userId,
    "To start the interaction, press button below 👇",
    {
      reply_markup: {
        keyboard: [[surveyBtn]],
      },
    }
  );
}

async function showShareContactButton(userId) {
  const contactBtn = {
    text: "📲 Share my phone number",
    request_contact: true,
  };
  await bot.sendMessage(
    userId,
    "You can also share your contact info (it is not necessary to do) 👇",
    {
      reply_markup: {
        keyboard: [[contactBtn]],
      },
    }
  );
}

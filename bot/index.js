import fs from "fs";

import TelegramBot from "node-telegram-bot-api";
import { JsonDB, Config } from "node-json-db";

import { getHearts, makeCSV } from "./interpretation.js";
import strings from "./strings.js";

const token = process.env.BOT_TOKEN;
const webAppBaseUrl = "https://shlavik.github.io/galaimagebot";
const superUsers = [840585, 139695448, 6150954529];

console.warn("¡b0t!");

const userDB = new JsonDB(new Config("bot/db", true, true, "/"));
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  try {
    const messageId = msg.message_id;
    const userId = msg.chat.id;
    const username = msg.chat.username;
    const name = msg.chat.first_name;
    const contact = msg.contact;
    const webAppData = msg.web_app_data?.data;
    const lang = msg.from.language_code;
    let text = msg.text;
    let userData = { userId, username, name, lang };

    if (text === "/delme") text = await handleDelMe(userData);

    userData = await updateUserData(userData);

    switch (text) {
      case "/start":
        return await handleStart(userData);
      case "/getdb":
        return isSuperUser(userId) && (await handleGetDB(userData));
      case "/getcsv":
        return isSuperUser(userId) && (await handleGetCSV(userData));
      case "/howmuch":
        return await handleHowMuch(userData);
    }

    if (webAppData) return await handleWebAppData(userData, webAppData);

    if (contact) return await handleContact(userData, contact);

    bot.sendMessage(userId, getStrings(lang).to_start);
  } catch (err) {
    console.error(err);
  }
});

function isSuperUser(userId) {
  return superUsers.includes(Number(userId));
}

function checkLang(lang) {
  return lang === "ru" ? "ru" : "en";
}

function getStrings(lang) {
  return strings[checkLang(lang)] || {};
}

async function updateUserData(userData = {}) {
  const { userId, username, name } = userData;
  if (!userId) return userData;
  try {
    return { ...(await userDB.getData("/" + userId)), ...userData };
  } catch (error) {
    const now = new Date();
    userData.timestamp = now.valueOf();
    await userDB.push("/" + userId, userData);
    const dateTimeStr = now.toISOString().slice(0, 19).replace("T", " ");
    console.warn(dateTimeStr, "NEW USER!", userId, username, name);
    return userData;
  }
}

async function handleStart({ userId, username, name, lang, phone, answers }) {
  name = username ? "@" + username : name;
  await bot.sendMessage(userId, getStrings(lang).hello + " " + name + "!");
  if (!answers) {
    await bot.sendMessage(userId, getStrings(lang).intro);
    showTakeTheSurveyButton(userId, lang);
    return;
  }
  if (!phone) return showShareContactButton(userId, lang);
  await bot.sendMessage(userId, getStrings(lang).nothing_to_do, {
    reply_markup: {
      remove_keyboard: true,
    },
  });
}

async function handleDelMe({ userId, username, name }) {
  await userDB.delete("/" + userId);
  const dateTimeStr = new Date().toISOString().slice(0, 19).replace("T", " ");
  console.warn(dateTimeStr, "DEL ME!", userId, username, name);
  await bot.sendMessage(userId, "🫧");
  return "/start";
}

async function handleGetDB({ userId, username, name }) {
  const dateTimeStr = new Date().toISOString().slice(0, 19).replace("T", " ");
  console.warn(dateTimeStr, "GET DB!", userId, username, name);
  await bot.sendDocument(
    userId,
    "bot/db.json",
    {},
    { contentType: "application/json" }
  );
}

async function handleGetCSV({ userId, username, name }) {
  const data = await userDB.getData("/");
  const csv = makeCSV(data);
  fs.writeFileSync("bot/users.csv", csv);
  const dateTimeStr = new Date().toISOString().slice(0, 19).replace("T", " ");
  console.warn(dateTimeStr, "GET CSV!", userId, username, name);
  await bot.sendDocument(
    userId,
    "bot/users.csv",
    {},
    { contentType: "text/csv" }
  );
}

async function handleHowMuch({ userId }) {
  const data = await userDB.getData("/");
  const entries = Object.entries(data);
  const withAnswers = entries.filter(([_, { answers }]) => answers);
  await bot.sendMessage(
    userId,
    "Started: <code>" +
      entries.length +
      "</code>\nAnswered: <code>" +
      withAnswers.length +
      "</code>",
    {
      parse_mode: "HTML",
    }
  );
}

async function handleWebAppData(userData, webAppData) {
  const { userId, username, name, lang } = userData;
  const data = JSON.parse(webAppData);
  const { answers, logs } = data;
  const now = new Date();
  answers.timestamp = now.valueOf();
  await userDB.push("/" + userId, { ...userData, answers, logs });
  const dateTimeStr = now.toISOString().slice(0, 19).replace("T", " ");
  console.warn(dateTimeStr, "NEW ANSWERS!", userId, username, name);
  await bot.sendMessage(userId, getStrings(lang).congratulations);
  const heartsStr = " " + getHearts(answers) + "\n\n";
  await bot.sendMessage(
    userId,
    getStrings(lang).score_total +
      heartsStr +
      getStrings(lang).score_annotation,
    {
      parse_mode: "HTML",
    }
  );
  showShareContactButton(userId, lang);
}

async function handleContact(userData, contact) {
  const { userId, lang } = userData;
  await userDB.push("/" + userId + "/phone", contact.phone_number);
  await bot.sendMessage(userId, getStrings(lang).sharing_thanks, {
    reply_markup: {
      remove_keyboard: true,
    },
  });
}

async function showTakeTheSurveyButton(userId, lang) {
  const surveyBtn = {
    text: getStrings(lang).take_survey_btn,
    web_app: {
      url: webAppBaseUrl + "/diversity-3q#lang=" + checkLang(lang),
    },
  };
  await bot.sendMessage(userId, getStrings(lang).to_interaction, {
    reply_markup: {
      keyboard: [[surveyBtn]],
    },
  });
}

async function showShareContactButton(userId, lang) {
  const contactBtn = {
    text: getStrings(lang).share_phone_btn,
    request_contact: true,
  };
  await bot.sendMessage(userId, getStrings(lang).share_phone_info, {
    reply_markup: {
      keyboard: [[contactBtn]],
    },
  });
}

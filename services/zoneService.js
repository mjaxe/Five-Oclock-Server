const zones = require('../data/zonesData');
const ZoneAndDrink = require('../models/zoneAndDrink')
const Groq = require('groq-sdk');
require('dotenv').config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
let fiveOclockZones = []

async function getAllZones(){
  fiveOclockZones = zones.filter(x => isFivePM(x.zone));

  const randomIndex = Math.floor(Math.random() * fiveOclockZones.length);
  
  const zone = fiveOclockZones[randomIndex]
  const drinkRecipe = await getResponseAPI(zone.city, zone.country);

  return new ZoneAndDrink(zone, drinkRecipe);
};

function isFivePM(timezone) {
    let date = new Date();
    let options = {
      timeZone: timezone,
      hour: '2-digit',
      hour12: false,
    };
    const hour = new Intl.DateTimeFormat('en-US', options).format(date);
    return hour === '17';
};

async function getResponseAPI(city, country) {
    const chatCompletion = await getGroqChatCompletion(city, country);
    return chatCompletion.choices[0]?.message?.content || "";
};

async function getGroqChatCompletion(city, country) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Give me a cocktail recipe popular in ${city}, ${country}. Keep it short`,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
};

module.exports = {
    getAllZones,
    getResponseAPI
}
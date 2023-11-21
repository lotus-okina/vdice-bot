import { Client, GatewayIntentBits } from "discord.js";
import { handleCommand } from "./commands.js";
import "dotenv/config";

const intents: GatewayIntentBits[] = [
  GatewayIntentBits.Guilds, // 前提
  GatewayIntentBits.MessageContent, // メッセージ内容取得
  GatewayIntentBits.GuildMessages, // メッセージ作成イベント
];

const client = new Client({ intents });

client.once("ready", () => {
  console.log("Ready!");
});

client.on("messageCreate", async (msg) => {
  if (!msg.author.bot && msg.content.startsWith("!")) {
    const reply = handleCommand(msg.content);
    // コマンドが存在しない場合はnull
    if (reply !== null) {
      await msg.channel.send(reply);
    }
  }
});

await client.login(process.env["BOT_TOKEN"]);

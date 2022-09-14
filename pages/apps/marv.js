import { Configuration, OpenAIApi } from "openai";
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [msgInput, setMsgInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `Marv is a chatbot that reluctantly answers questions with sarcastic responses:\n\nYou: ${msgInput}\nMarv: `,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
    });
    setResult("You: " + msgInput + " Marv: " + response.data.choices[0].text);
    setMsgInput("");
  }

  return (
    <div>
      <Head>
        <title>Marv [Chatbot]</title>
        <link rel="icon" href="/pig003.png" />
      </Head>

      <main className={styles.main}>
        <img src="/pig001.png" className={styles.icon} />
        <h3>Marv [Chatbot]</h3>
        <h2>"Don't Worry, I'm Nice" - Marv in the Future</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Enter your message"
            value={msgInput}
            onChange={(e) => setMsgInput(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}

import { Configuration, OpenAIApi } from "openai";
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [sentenceInput, setSentenceInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Correct this to standard English: ${sentenceInput}`,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    setResult(response.data.choices[0].text);
    setSentenceInput("");
  }

  return (
    <div>
      <Head>
        <title>Grammar Checker</title>
        <link rel="icon" href="/pig003.png" />
      </Head>

      <main className={styles.main}>
        <img src="/pig002.png" className={styles.icon} />
        <h3>Grammar Checker</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="sentence"
            placeholder="Enter your sentence"
            value={sentenceInput}
            onChange={(e) => setSentenceInput(e.target.value)}
          />
          <input type="submit" value="Check" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}

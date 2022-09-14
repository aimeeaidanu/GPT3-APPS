import { Configuration, OpenAIApi } from "openai";
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [sentenceInput, setSentenceInput] = useState("");
  const [languageInput, setLanguageInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Translate this to ${languageInput}: ${sentenceInput}`,
      temperature: 0.3,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    setResult(response.data.choices[0].text);
    setSentenceInput("");
    setLanguageInput("")
  }

  return (
    <div>
      <Head>
        <title>Text Translater</title>
        <link rel="icon" href="/pig005.png" />
      </Head>

      <main className={styles.main}>
        <img src="/pig003.png" className={styles.icon} />
        <h3>Text Translater</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="sentence"
            placeholder="Enter your sentence"
            value={sentenceInput}
            onChange={(e) => setSentenceInput(e.target.value)}
          />
          <input 
            type="text"
            name="language"
            placeholder="Enter your language"
            value={languageInput}
            onChange={(e) => setLanguageInput(e.target.value)}
          />
          <input type="submit" value="Translate" />

        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}



import { Configuration, OpenAIApi } from "openai";
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [questionInput, setQuestionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `I am a highly intelligent question answering bot. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "ur bad 🤓".\nQ: ${questionInput}\nA: `,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["Q:"],
    });
    setResult("Q: " + questionInput + "\nA: " + response.data.choices[0].text);
    setQuestionInput("");
  }

  return (
    <div>
      <Head>
        <title>QNA [Chatbot]</title>
        <link rel="icon" href="/pig003.png" />
      </Head>

      <main className={styles.main}>
        <img src="/pig002.png" className={styles.icon} />
        <h3>Questions and Answers [Chatbot]</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="question"
            placeholder="Enter your question"
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
          />
          <input type="submit" value="Ask" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}

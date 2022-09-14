import React from "react";
import { useRef } from 'react';
import Head from "next/head";
import styles from "./index.module.css";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Home() {
    const ref = useRef();
    const alignCenter = { display: 'flex', alignItems: 'center' }

    function goToGrammar(){
        window.location.href='/apps/grammar'
    }
    function goToTranslate() {
        window.location.href='/apps/translate'
    }
    function goToFriend(){
        window.location.href='/apps/friend'
    }
    function goToQNA(){
        window.location.href='/apps/QNA'
    }
    function goToMarv(){
        window.location.href='/apps/marv'
    }
    return (
        <div>
            <Head>  
                <title>Aidan's AI Stuff</title>
                <link rel="icon" href="/pig002.png" />
            </Head> 

            <main className={styles.main}>
                <div style={{ width: '100%', height: '100%', background: '#253237' }}>
                    <Parallax pages={2} ref={ref} style={{ top: '0', left: '0' }}>
                        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: 'gray' }} />
                        <ParallaxLayer
                            offset={1}
                            speed={0.5}
                            style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            }}>
                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={0.01}
                            onClick={() => ref.current.scrollTo(1)}
                            speed={0.5}
                        >
                            <img src="/pig001.png" className={styles.icon} />
                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={0.075}
                            onClick={() => ref.current.scrollTo(1)}
                            speed={0.75}
                        >
                            <h2>Welcome to Aidan's OpenAI Website!</h2>
                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={0.115}
                            onClick={() => ref.current.scrollTo(1)}
                            speed={1}
                        >
                            <h3>Check out some cool apps below!</h3>
                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={0.175}
                            onScroll={() => ref.current.scrollTo(0.43)}
                            speed={1.25}
                        >
                           <div className={styles.column} style={{backgroundColor: "black", color: "white"}}>
                                <div className={styles.applabel}>Chatbot</div>
                                <h2>Marv</h2>
                                <p>Chatbot that talks in a mean and sarcastic way</p>
                                <button className={styles.button} onClick={goToMarv}>Try Me!</button>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={0.425}
                            onClick={() => ref.current.scrollTo(1)}
                            speed={1.5}
                        >
                            <div className={styles.column} style={{backgroundColor: "black", color: "white"}}>
                                <button className={styles.button}>View more apps</button>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer  
                            offset={1}
                            onClick={() => ref.current.scrollTo(2)}
                            speed={0.5}
                        >
                            <div className={styles.row}>
                                <div className={styles.column} style={{backgroundColor: "black", color: "white"}}>
                                    <h2>Grammar Checker</h2>
                                    <p>Checks your grammar!</p>
                                    <button className={styles.button} onClick={goToGrammar}>Try Me!</button>
                                </div>
                                <div className={styles.column} style={{backgroundColor: "white"}}>
                                    <h2>Translater</h2>
                                    <p>Translates your text!</p>
                                    <button className={styles.button2} onClick={goToTranslate}>Try Me!</button>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.column} style={{backgroundColor: "white", color: "black"}}>
                                    <div className={styles.applabel}>Chatbot</div>
                                    <h2>Friend</h2>
                                    <p>Talk to your AI friend :)</p>
                                    <button className={styles.button2} onClick={goToFriend}>Try Me!</button>
                                </div>
                                <div className={styles.column} style={{backgroundColor: "black", color:"white"}}>
                                    <div className={styles.applabel}>Chatbot</div>
                                    <h2>Questions and Answers</h2>
                                    <p>Ask me anything!</p>
                                    <button className={styles.button} onClick={goToQNA} style={{ color:"red" }}>Try Me!</button>
                                </div>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={1.9}
                            onClick={() => ref.current.scrollTo(0)}
                        >
                            <h2>Created by Aidan using React and OpenAI</h2>
                        </ParallaxLayer>
                    </Parallax>
                </div>
            </main>
        </div>
        
    );
}
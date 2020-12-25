import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😃": "Smiling",
  "😡": "Angry",
  "😎": "Swag",
  "🤖": "Bot-Spam",
  "👋": "Hey",
  "👻": "Ghost"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojiInputHandler() {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our Database";
    }
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interceptor</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3>Emojis We Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

import React, { useState } from "react";
import "./styles.css";

// define a database
var emojiDictionary = {
  "😀": "smiling",
  "😥": "sad",
  "😠": "angry",
  "❤️": "love",
  "🍕": "pizza",
  "🍔": "hamburger",
  "🍟": "french fries",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😶‍🌫️": "Face in Clouds",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose"
};

var emojisWeKnow = Object.keys(emojiDictionary);

// meaning n setmeaning state
// two handlers - emojiInputHandler and emojiClickHandler
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning); //react call to show output
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 class="main"> Find Emoji! </h1>

      <input onChange={emojiInputHandler} />
      {/* actual output */}
      <h2> {meaning} </h2>

      {/* mapping done */}

      <h3 class="subheading"> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

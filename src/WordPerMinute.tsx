import { useEffect, useState } from "react";

const WORDS = [
  "Butterfly",
  "Sunshine",
  "Elephant",
  "Mountain",
  "Adventure",
  "Keyboard",
  "Delicious",
  "Starlight",
  "Waterfall",
  "Bicycle",
];

export default function WordPerMinute() {
  const [word, setWord] = useState(
    () => WORDS[(Math.random() * WORDS.length) | 0]
  );
  const [characterCount, setCharacterCount] = useState(0);
  const [buffer, setBuffer] = useState("");
  const [time, setTime] = useState(0);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (buffer === word) {
      setWord(WORDS[(Math.random() * WORDS.length) | 0]);
      setCharacterCount((characterCount) => characterCount + word.length);
    }
    setBuffer("");
  }

  useEffect(() => {
    if (time !== 0) {
      const timeout = setTimeout(() => setTime(time - 1), 1000);

      return () => clearTimeout(timeout);
    }
  }, [time]);

  if (time === 0) {
    return <button onClick={() => setTime(60)}>Play</button>;
  }

  return (
    <div className="myDiv">
      {Boolean(time) && <h1 className="myH1">{word}</h1>}
      <h2>Characters typed: {characterCount}</h2>
      <h3>Remaining time: {time}</h3>
      {time ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="inputField">Type Here:</label>
          <input
            autoFocus
            type="text"
            id="inputField"
            value={buffer}
            onChange={(e) => setBuffer(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <button onClick={() => setTime(60)}>PLAY</button>
      )}
    </div>
  );
}

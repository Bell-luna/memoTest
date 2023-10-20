import { useEffect, useState } from "react";

const images = [
  "https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/mysql-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/facebook-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/sass-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function Memotest() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === images.length) {
      alert("GANASTE");
      location.reload();
    }
  });

  return (
    <div className="memotest-list">
      {images.map((image) => {
        const [, url] = image.split("|");

        return (
          <div
            key={image}
            className="memotest-item"
            onClick={() =>
              selected.length < 2 &&
              setSelected((selected) => selected.concat(image))
            }
          >
            {selected.includes(image) || guessed.includes(image) ? (
              <img alt="icon" src={url} />
            ) : (
              <img
                key={image}
                alt="icon"
                src="https://icongr.am/clarity/search.svg?size=128&color=currentColor"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

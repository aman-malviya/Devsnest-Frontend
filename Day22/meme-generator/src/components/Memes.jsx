import React, { useEffect, useState } from "react";
import Template from "./Template";
import MemePage from "./MemePage";
import "../App.css";

function Memes(props) {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((result) => setTemplates(result.data.memes));
  }, []);
  return (
    <div>
      {meme === null ? (
        <Template templates={templates} setMeme={setMeme} />
      ) : (
        <MemePage meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}

export default Memes;

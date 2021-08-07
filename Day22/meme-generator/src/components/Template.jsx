import React from "react";

function Template({ templates, setMeme }) {
  return (
    <div className="d-flex flex-wrap">
      {templates.map((meme, index) => (
        <div
          key={index}
          className="template m-auto"
          onClick={() => {
            setMeme(meme);
          }}
        >
          <div
            style={{ backgroundImage: `url(${meme.url})` }}
            className="image mb-2"
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Template;

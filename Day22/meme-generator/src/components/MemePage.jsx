import React, { useState } from "react";

function MemePage({ meme, setMeme }) {
  const count = meme.box_count;
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "Aman",
    password: "scarlett",
    boxes: [],
  });

  const getMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map(
      (box, index) => (url += `&boxes[${index}][text]=${box.text}`)
    );
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMeme({ ...meme, url: data.data.url });
      });
  };
  return (
    <div className="d-flex">
      <div className="d-flex flex-column m-auto">
        <div
          className="meme-img mb-2 m-auto"
          style={{ backgroundImage: `url(${meme.url})` }}
        ></div>
        <div>
          {[...Array(count)].map((_, index) => (
            <input
              type="text"
              required
              className="m-1 "
              //tricky
              onChange={(e) => {
                const newBoxes = form.boxes;
                newBoxes[index] = { text: e.target.value };
                setForm({ ...form, boxes: newBoxes });
              }}
              placeholder={`Meme Caption ${index + 1}`}
            />
          ))}
        </div>
        <div className="d-grid gap-2 col-6 mx-auto mt-3">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => getMeme()}
          >
            Generate Meme
          </button>
          <button
            className="btn btn-secondary mt-1"
            type="button"
            onClick={() => setMeme(null)}
          >
            Choose Template
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemePage;

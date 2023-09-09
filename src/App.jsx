import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data.slice(0, count));
    const newText = data.slice(0, parseInt(count));
    setText(newText);
  };
  return (
    <section className="section-center">
      <h4>tired of boring lorem ispum</h4>
      <form onSubmit={(e) => handleSubmit(e)} className="lorem-form">
        <label htmlFor="number">paragraphs:</label>
        <input
          type="number"
          name="number"
          id="number"
          min="1"
          max="8"
          step="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;

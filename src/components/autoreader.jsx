import { useContext, useState } from "react";
import { dataProvider } from "./dataProvider";
import "../App.css";

export default function AutoComplete() {
  const {
    input,
    setInput,
    filteredData,
    loading,
    handleInputChange
  } = useContext(dataProvider);

  function Highlight({ data }) {
    const [isHovered, setIsHovered] = useState(false); // Always called, regardless of input

    if (!input) return <>{data}</>; // Safe to return after hooks have been called

    // Create a regular expression to match the input (case-insensitive)
    const regex = new RegExp(input, "gi");

    // Replace the matching text and wrap it with a <span> element for highlighting
    const parts = data.split(regex);

    return (
      <span
        style={{
          cursor: "pointer",
          backgroundColor: isHovered ? "lightBlue" : "transparent",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {parts.map((part, i) => (
          < >
            {part}
            {i < parts.length - 1 && (
              <span className="highlight">{data.match(regex)[i]}</span>
            )}
          </>
        ))}
      </span>
    );
  }

  function HandleClick(index, data) {
    setInput(data); // Set input state directly with selected data
  }

  return (
    <div>
      <h1>Autocomplete</h1>
      <label>
        Enter some data:{" "}
        <input
          type="text"
          onChange={(e) => handleInputChange(e)}
          placeholder="enter the data"
          id="inpur"
          value={input}
        />
      </label>
      {loading ? (
        <div>...Loading</div>
      ) : (
        <ul>
          {filteredData.map((data, index) => (
            <li key={index} id={index} onClick={() => HandleClick(index, data)}>
              <Highlight data={data} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

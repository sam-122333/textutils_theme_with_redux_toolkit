import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleShowAlert } from "./store/slices/alertSlice";

export default function TextForm(props) {
  const dispatch = useDispatch();
  const myStyle = useSelector((state) => state.myStyle);
  const myBtn = useSelector((state) => state.btnStyle);
  const textAreaStyle = useSelector(
    (state) => state.textAreaStyle.textAreaStyle
  );

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const changeUpperCase = () => {
    setText(document.getElementById("myBox").value.toUpperCase());
    console.log(
      document.getElementById("myBox").value.toUpperCase(),
      "this is the value"
    );
    dispatch(handleShowAlert("Converted to Upper Case.", "Success! "));
  };
  const changeLowerCase = () => {
    setText(document.getElementById("myBox").value.toLowerCase());
    dispatch(handleShowAlert("Converted to Lower Case.", "Success! "));
    // console.log("onclick happened: ");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    dispatch(handleShowAlert("copied to clipboard.", "Success! "));
  };
  const clearText = () => {
    dispatch(handleShowAlert("Text is cleared.", "Success! "));
    setText("");
  };
  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    dispatch(handleShowAlert("Extra space removed.", "Success! "));
  };

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <h2 style={{ color: myStyle }}>Enter Text To Analyze</h2>
          <textarea
            placeholder="Enter Some Text Here..."
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleChange}
            style={{
              backgroundColor: textAreaStyle.backgroundColor,
              color: textAreaStyle.color,
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={changeUpperCase}
          className={`btn btn-${myBtn} mx-2 my-1`}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={changeLowerCase}
          className={`btn btn-${myBtn} mx-2 my-1`}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleCopy}
          className={`btn btn-${myBtn} mx-2 my-1`}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleExtraSpace}
          className={`btn btn-${myBtn} mx-2 my-1`}
        >
          Remove Space
        </button>
        <button
          disabled={text.length === 0}
          onClick={clearText}
          className={`btn btn-${myBtn} mx-2 my-1`}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{ color: myStyle }}>
        <h1>your text summery</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes take to read this
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text.toLocaleLowerCase() : "Enter Some Text"}</p>
      </div>
    </>
  );
}

import React from "react";
import "./App.css"; // 스타일 파일 가져오기

const Options = (props) => {
  const options = props.options.map((option) => (
    <button
      key={option.id}
      onClick={() => option.handler(props.actionProvider)} // actionProvider 전달
      className="option-button"
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{options}</div>;
};

export default Options;

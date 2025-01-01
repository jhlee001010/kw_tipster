import React from "react";
import "./App.css"; // 버튼 스타일 포함된 CSS

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



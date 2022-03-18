import React, { useState, useEffect } from "react";
import axios from "axios";

const KEY = process.env.REACT_APP_WIDGETS_KEY;

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: KEY,
        },
      }
    );
  }, [language, text]);
  return (
    <>
      <p>convert</p>
    </>
  );
};

export default Convert;

import { useState } from "react";
import styles from "./SearchBar.module.css";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.error("Please, enter the query");

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      notify();
      return;
    }

    onSubmit(inputValue.trim());

    setInputValue("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
}

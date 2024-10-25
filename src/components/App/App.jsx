import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchImageData } from "../../api/api";

export default function App() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState([]);
  const [total_pages, setTotal_pages] = useState(2);

  const [numberOfPage, setNumberOfPage] = useState(1);
  const [queryName, setQueryName] = useState("");

  const handleGetQueryName = async (newQueryName) => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetchImageData(newQueryName, numberOfPage);
      setTotal_pages(response.total_pages);
      setImages((prevImages) => [...prevImages, ...response.results]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleGetQueryName} />
    </div>
  );
}
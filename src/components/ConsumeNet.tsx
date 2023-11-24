import React, { useState, useEffect } from "react";
import { MANGA, ANIME } from "@consumet/extensions";
const animeProvider = new ANIME.Gogoanime();

interface episode {
  id: string;
  url?: string;
  image?: string;
  cover?: string;
  rating?: number;
  releaseDate?: string;
  genre?: string[];
  [x: string]: any; // other fields
}

interface response {
  currentPage: number;
  hasNextPage: boolean;
  results: episode[];
}

const ConsumeNet = () => {
  const [list, setList] = useState<episode[]>([]);

  useEffect(() => {
    const animeList = animeProvider.fetchTopAiring().then((data) => {
      setList(data.results);
      console.log(list);
    });
  }, []);

  return (
    <ul className="list-group">
      <h1>Users List</h1>
      {list.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between"
        >
          {item.id}
          <img src={item.image} />
        </li>
      ))}
    </ul>
  );
};

export default ConsumeNet;

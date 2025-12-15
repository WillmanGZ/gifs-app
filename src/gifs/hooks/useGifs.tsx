import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleSearch = async (query: string = "") => {
    if (query.length === 0) return;

    if (previousSearches.includes(query)) return;

    setPreviousSearches([query, ...previousSearches].splice(0, 8));

    const newGifs = await getGifsByQuery(query);
    setGifs(newGifs);
    gifsCache.current[query] = newGifs;
  };

  const handleSearchClicked = async (query: string) => {
    if (gifsCache.current[query]) {
      setGifs(gifsCache.current[query]);
      return;
    }

    const newGifs = await getGifsByQuery(query);
    setGifs(newGifs);
  };

  return {
    gifs,
    previousSearches,
    handleSearch,
    handleSearchClicked,
  };
};

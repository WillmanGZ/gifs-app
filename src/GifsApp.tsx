import { useState } from "react";
import { GifList } from "./gifs/GifList";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SharedBar } from "./shared/components/SharedBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  const handleSearch = async (query: string) => {
    if (previousSearches.includes(query)) return;

    const newHistory = [query, ...previousSearches];
    setPreviousSearches(newHistory.slice(0, 8));
    setGifs(await getGifsByQuery(query));
  };

  const handleSearchClicked = (query: string) => {
    handleSearch(query);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SharedBar placeholder="Buscar gifs" onQuery={handleSearch} />

      {/* Previous searches */}
      <PreviousSearches
        searches={previousSearches}
        onLabelClicked={handleSearchClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};

import { useState } from "react";
import { GifList } from "./gifs/GifList";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SharedBar } from "./shared/components/SharedBar";

export const GifsApp = () => {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  const handleSearchClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string) => {
    if (previousSearches.includes(query)) return;

    const newHistory = [query, ...previousSearches];
    setPreviousSearches(newHistory.slice(0, 8));
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
      <GifList gifs={mockGifs} />
    </>
  );
};

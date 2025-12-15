import { GifList } from "./gifs/GifList";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SharedBar } from "./shared/components/SharedBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousSearches, handleSearch, handleSearchClicked } =
    useGifs();

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

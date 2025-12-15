import { GifList } from "./gifs/GifList";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SharedBar } from "./shared/components/SharedBar";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SharedBar placeholder="Buscar gifs" />

      {/* Previous searches */}
      <PreviousSearches searches={["Goku", "Dragon Ball"]} />

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  );
};

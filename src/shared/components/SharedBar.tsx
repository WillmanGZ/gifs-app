import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SharedBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  const handleSearch = useCallback(() => {
    if (query.trim() == "") return;

    onQuery(query.trim().toLowerCase());
    setQuery("");
  }, [query, onQuery]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch();
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, handleSearch]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

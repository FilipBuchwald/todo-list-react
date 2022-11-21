import { useLocation } from "react-router-dom";
import Input from "../../Input";

const Search = () => {
  const location = useLocation();
  const query = ( new URLSearchParams(location.search)).get("szukaj");

  return (
    <Input
    placeholder="Filtruj zadania"
    value={query || ""}
    />
  )
};

export default Search;
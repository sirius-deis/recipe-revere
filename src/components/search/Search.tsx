import { FC, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";

interface SearchProps {
  placeholderText: string;
}

const Search: FC<SearchProps> = ({ placeholderText }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      return;
    }
    //TODO: add url with query parameter
    // navigate("");
    throw new Error("This feature is not supported");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <form className={styles.search} onSubmit={submitHandle}>
      <FaSearch />
      <input
        type="search"
        value={searchTerm}
        onChange={changeHandler}
        placeholder={placeholderText}
      />
    </form>
  );
};

export default Search;

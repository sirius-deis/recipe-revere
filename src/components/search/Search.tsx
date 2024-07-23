import { FC, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";

interface SearchProps {
  [x: string]: string;
}

const Search: FC<SearchProps> = ({ ...rest }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      return;
    }
    navigate(`/search-results?query=${searchTerm}`);
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
        {...rest}
      />
    </form>
  );
};

export default Search;

import { FC } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";

interface SearchProps {
  placeholderText: string;
}

const Search: FC<SearchProps> = ({ placeholderText }) => {
  return (
    <div className={styles.search}>
      <FaSearch />
      <input type="search" placeholder={placeholderText} />
    </div>
  );
};

export default Search;

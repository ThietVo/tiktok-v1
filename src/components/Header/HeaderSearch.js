import clsx from "clsx";
import { FaSistrix } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import styles from "./HeaderSearch.module.scss";

function HeaderSearch() {
  return (
    <div className={clsx(styles.headerSearch)}>
      <form action="" className={clsx(styles.headerSearchForm)}>
        <input
          type="text"
          className={clsx(styles.headerSearchInput)}
          placeholder="Tìm kiếm tài khoản và video"
        />

        <div className={clsx(styles.headerSearchDelete)}>
          <GrClose />
        </div>

        <span className={clsx(styles.headerSearchSpliter)}></span>

        <button type="submit" className={clsx(styles.headerSearchBtn)}>
          <FaSistrix className={clsx(styles.headerSearchIcon)}/>
        </button>
      </form>
    </div>
  );
}

export default HeaderSearch;

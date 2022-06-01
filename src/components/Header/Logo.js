import styles from "./Logo.module.scss";
import logo from "../../assets/images/logo/logo.svg.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import sidebarSlice from '../../redux/sidebarSlice';

function Logo() {
  const dispatch = useDispatch();
  const handleClickLogo = () => {
    dispatch(sidebarSlice.actions.setShowSidebar(true));
  }

  return (
    <Link to="/" className={styles.logo} onClick={handleClickLogo}>
      <img src={logo} alt="" className={styles.logo}/>
    </Link>
  );
}

export default Logo;

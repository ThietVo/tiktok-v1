import { Link } from "react-router-dom";
import { BiLogOut, BiCloudUpload, BiMessageAltMinus, BiUser } from "react-icons/bi";
import { FiSend } from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";

import styles from "./HeaderRightLogged.module.scss";
import Avatar from '../Avatar';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import userLoginSlice from "../../redux/userLoginSlice";
import sidebarSlice from '../../redux/sidebarSlice';
import { userLoginSelector } from '../../redux/selectors';
import Notification from "../Notification/Notification";

function HeaderRightLogged() {
  const dispatch = useDispatch()
  const { userLogged } = useSelector(userLoginSelector);

  const handleLogout = () => {
    signOut(auth);
    dispatch(userLoginSlice.actions.setUserLogin(''))
    dispatch(sidebarSlice.actions.setShowSidebar(true));
  }

  const handleClickUploadBtn = () => {
    dispatch(sidebarSlice.actions.setShowSidebar(false));
  }

  return (
    <div className={styles.headerRight}>
      <Link to="/upload" className={styles.headerRightItem} onClick={handleClickUploadBtn}>
        <BiCloudUpload />
      </Link>
      <div className={styles.headerRightItem}>
          <FiSend />
      </div>
      {/* <div className={styles.headerRightItem}>
          <BiMessageAltMinus />
      </div> */}
      <Notification />
      <div className={styles.headerRightAvartar}>
        <Avatar urlImg={userLogged.avatar} avatarSmall/>
        <div className={styles.headerRightAvartarList}>
          <Link to={`${userLogged.id}`} className={styles.headerRightAvartarListItem}>
              <BiUser style={{ marginRight: 8 }} />
              Xem hồ sơ
            </Link>
          <Link to="/" className={styles.headerRightAvartarListItem} onClick={handleLogout}>
            <BiLogOut style={{ marginRight: 8 }} />
            Đăng xuất
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderRightLogged;

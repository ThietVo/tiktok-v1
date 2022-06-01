import clsx from "clsx";
import { FaEllipsisV, FaBook, FaKeyboard } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../Button";
import styles from "./HeaderRight.module.scss";
import modalSlice from "../../redux/modalSlice";
import { useRef } from "react";

function HeaderRight() {
  const loginBtnRef = useRef();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(modalSlice.actions.setModalLogin(true));
  };
  return (
    <div className={clsx(styles.headerRight)}>
      <Link to="#" className={clsx(styles.upload)} onClick={handleLogin}>
        Tải lên
      </Link>

      <Button
        ref={loginBtnRef}
        text="Đăng nhập"
        className={clsx(styles.headerRightBtn)}
        onClick={handleLogin}
      />

      <div className={clsx(styles.seeMore)}>
        <FaEllipsisV className={clsx(styles.seeMoreIcon)} />

        <div className={clsx(styles.seeMoreList)}>
          <Link to="#" className={clsx(styles.seeMoreListItem)}>
            <FaBook style={{ marginRight: 8 }} />
            Tiếng Việt
          </Link>
          <Link to="#" className={clsx(styles.seeMoreListItem)}>
            <FiHelpCircle style={{ marginRight: 8 }} />
            Phản hồi và trợ giúp
          </Link>
          <Link to="#" className={clsx(styles.seeMoreListItem)}>
            <FaKeyboard style={{ marginRight: 8 }} />
            Phím tắt trên bàn phím
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderRight;

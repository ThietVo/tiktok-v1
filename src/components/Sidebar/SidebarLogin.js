import clsx from "clsx";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import Button from "../Button";
import styles from "./SidebarLogin.module.scss";
import modalSlice from "../../redux/modalSlice";

function SidebarLogin() {
  const loginBtnRef = useRef();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalSlice.actions.setModalLogin(true));
  };
  return (
    <div className={clsx(styles.sidebarLogin)}>
      <p className={clsx(styles.sidebarLoginTip)}>
        Đăng nhập để follow các tác giả, thích video và xem bình luận.
      </p>
      <Button
        ref={loginBtnRef}
        text="Đăng nhập"
        className={clsx(styles.sidebarLoginBtn)}
        onClick={handleClick}
      />
    </div>
  );
}

export default SidebarLogin;

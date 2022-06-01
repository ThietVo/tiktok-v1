import { useState } from "react";

import Modal from "./Modal";
import styles from "./ModalLogin.module.scss";
import Login from "../Login/Login";
import Register from "../Register/Register";

function ModalLogin() {
  const [isRegister, setIsRegister] = useState(false);

  const handleClickHeaderBtn = () => {
    setIsRegister(!isRegister);
  };
  return (
    <Modal>
      <div className={styles.modalInner}>
        <div className={styles.modalInnerHeader}>
          <h2>{isRegister ? "Đăng ký" : "Đăng nhập"}</h2>
          <button onClick={handleClickHeaderBtn}>
            {!isRegister ? "Đăng ký" : "Đăng nhập"}
          </button>
        </div>
        {isRegister ? <Register /> : <Login />}
      </div>
    </Modal>
  );
}

export default ModalLogin;
